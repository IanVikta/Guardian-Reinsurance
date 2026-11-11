# Guardian Reinsurance — Full Hosting & Deployment Guide

This guide contains complete instructions for hosting and deploying the **Guardian Reinsurance** web application. It covers database configuration, Laravel backend API setup, React frontend deployment, web server configuration (Nginx & Apache), and SSL setup.

---

## 1. System Architecture Overview

The system consists of three interconnected layers:

```
┌─────────────────────────────────┐
│     Frontend (React SPA)        │  Hosted at: https://guardianrebrokers.co.ug (or your domain)
│  Static HTML/JS/CSS Production  │
└────────────────┬────────────────┘
                 │ HTTP API Calls (REST / JSON)
                 ▼
┌─────────────────────────────────┐
│    Backend (Laravel 11+ API)    │  Hosted at: https://api.guardianrebrokers.co.ug (or /api)
│      PHP 8.2+ REST Services     │
└────────────────┬────────────────┘
                 │ MySQL PDO
                 ▼
┌─────────────────────────────────┐
│     Database (MySQL 8.0+)       │  Name: guardian_reinsurance_db
│   Tables, Migrations & Data     │
└─────────────────────────────────┘
```

---

## 2. Server & Environment Requirements

Ensure the hosting server meets the following requirements:

- **Operating System:** Linux (Ubuntu 22.04/24.04 LTS, Debian 12, or AlmaLinux) or any VPS/cPanel hosting with terminal access.
- **Web Server:** Nginx (recommended) or Apache 2.4+
- **PHP:** Version 8.2 or 8.3 with extensions:
  - `php-fpm`, `php-mysql`, `php-xml`, `php-mbstring`, `php-curl`, `php-zip`, `php-bcmath`, `php-gd`, `php-intl`
- **Database:** MySQL 8.0+ or MariaDB 10.6+
- **Composer:** Composer 2.x
- **Node.js:** Node.js v18.x or v20.x + npm (optional on server if deploying the pre-built `build` directory)
- **SSL Certificate:** Free Let's Encrypt Certbot or commercial SSL certificate

---

## 3. Package Contents

This package includes:
1. `guardian-backend/` — Laravel API backend source code, migrations, models, controllers, and email notification logic.
2. `guardian-react-app/` — React frontend application source code.
3. `guardian-react-app/build/` — **Pre-compiled production-ready frontend bundle** (ready to deploy immediately to any web root).
4. `database/guardian_reinsurance_db.sql` — Ready-to-import MySQL database dump with all tables and initial schema.
5. `Website/` — Original brand images and high-resolution media assets.

---

## 4. Step 1: Database Setup

### Option A: Import the Pre-Built SQL Dump (Fastest)

1. Log into MySQL on your server:
   ```bash
   mysql -u root -p
   ```

2. Create the database and dedicated user:
   ```sql
   CREATE DATABASE guardian_reinsurance_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'guardian_user'@'localhost' IDENTIFIED BY 'StrongSecurePassword123!';
   GRANT ALL PRIVILEGES ON guardian_reinsurance_db.* TO 'guardian_user'@'localhost';
   FLUSH PRIVILEGES;
   EXIT;
   ```

3. Import the SQL dump:
   ```bash
   mysql -u guardian_user -p guardian_reinsurance_db < database/guardian_reinsurance_db.sql
   ```

### Option B: Use Laravel Migrations

If you prefer running migrations fresh:
```bash
cd guardian-backend
cp .env.example .env
# Edit .env with your DB credentials, then run:
php artisan migrate --force
```

---

## 5. Step 2: Backend (Laravel API) Setup

### 5.1 Directory Placement
Place the backend code in your web server directory, for example:
```bash
/var/www/guardian-backend
```

> **IMPORTANT SECURITY NOTE:** The web server's document root MUST point to `/var/www/guardian-backend/public`, **NEVER** to `/var/www/guardian-backend`. Pointing to the root directory exposes sensitive `.env` files and source code.

### 5.2 Install PHP Dependencies
From inside `/var/www/guardian-backend`:
```bash
composer install --no-dev --optimize-autoloader
```

### 5.3 Configure the Environment File (`.env`)
Create the production `.env` file:
```bash
cp .env.example .env
```
Generate the application key:
```bash
php artisan key:generate
```

Open and edit `.env`:
```ini
APP_NAME="Guardian Reinsurance"
APP_ENV=production
APP_KEY=base64:your_generated_app_key_here
APP_DEBUG=false
APP_URL=https://api.yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=guardian_reinsurance_db
DB_USERNAME=guardian_user
DB_PASSWORD=StrongSecurePassword123!

SESSION_DRIVER=database
QUEUE_CONNECTION=database
CACHE_STORE=database

# SMTP Configuration for contact forms and inquiries
MAIL_MAILER=smtp
MAIL_HOST=smtp.yourmailprovider.com
MAIL_PORT=587
MAIL_USERNAME=your_email_account
MAIL_PASSWORD=your_email_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="no-reply@guardianrebrokers.co.ug"
MAIL_FROM_NAME="Guardian Reinsurance System"

# Administrative recipient for customer inquiries and quotes
NOTIFICATION_RECIPIENT_EMAIL=info@guardianrebrokers.co.ug
NOTIFICATION_RECIPIENT_NAME="Guardian Reinsurance Desk"
```

### 5.4 File Permissions
Set ownership to the web server user (`www-data` on Ubuntu/Debian, `nginx` or `apache` on CentOS/RHEL):
```bash
sudo chown -R www-data:www-data /var/www/guardian-backend
sudo chmod -R 775 /var/www/guardian-backend/storage /var/www/guardian-backend/bootstrap/cache
```

### 5.5 Create Storage Symlink & Cache Configurations
Run:
```bash
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 5.6 Background Queues and Scheduling
The application handles inquiry notifications via database queues and mailers. Set up a crontab entry for the Laravel scheduler:
```bash
crontab -e -u www-data
```
Add this line:
```cron
* * * * * cd /var/www/guardian-backend && php artisan schedule:run >> /dev/null 2>&1
```

If using queued mail delivery, run the queue worker with Supervisor or systemd:
```bash
php artisan queue:work --tries=3 --timeout=90
```

---

## 6. Step 3: Frontend (React) Setup

### Option A: Using the Pre-Compiled Build (Fastest)
A production build has already been compiled into `guardian-react-app/build/`.
Simply upload the contents of the `build` directory directly to your frontend document root (e.g. `/var/www/guardian-frontend`).

### Option B: Building Fresh with a Custom API URL
If your API domain is different (e.g., `https://api.yourdomain.com/api`), build on your local machine or server:

1. Navigate to the frontend directory:
   ```bash
   cd guardian-react-app
   ```

2. Create `.env` or set the environment variable:
   ```bash
   echo "REACT_APP_API_BASE_URL=https://api.yourdomain.com/api" > .env
   ```

3. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```

4. The resulting files in `guardian-react-app/build/` are ready for deployment.

---

## 7. Step 4: Web Server Configuration (Nginx & Apache)

### Recommended Setup: Two Subdomains
- **Frontend:** `yourdomain.com` (or `www.yourdomain.com`)
- **Backend API:** `api.yourdomain.com`

---

### 7.1 Nginx Configuration Example

#### Nginx Configuration for Backend (`/etc/nginx/sites-available/api.yourdomain.com`)
```nginx
server {
    listen 80;
    server_name api.yourdomain.com;
    root /var/www/guardian-backend/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock; # Adjust PHP version if needed
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

#### Nginx Configuration for Frontend (`/etc/nginx/sites-available/yourdomain.com`)
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/guardian-frontend;

    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location / {
        # Critical for React Router: fallback to index.html on direct URL refresh
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets for speed
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    location ~ /\. {
        deny all;
    }
}
```

Enable the sites:
```bash
sudo ln -s /etc/nginx/sites-available/api.yourdomain.com /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

### 7.2 Apache Configuration (.htaccess & VirtualHost)

#### Backend VirtualHost (Apache):
```apache
<VirtualHost *:80>
    ServerName api.yourdomain.com
    DocumentRoot /var/www/guardian-backend/public

    <Directory /var/www/guardian-backend/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/guardian_backend_error.log
    CustomLog ${APACHE_LOG_DIR}/guardian_backend_access.log combined
</VirtualHost>
```

#### Frontend VirtualHost & `.htaccess` (Apache):
Inside the frontend directory (`/var/www/guardian-frontend`), ensure an `.htaccess` file exists to handle React client-side routing:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 8. Step 5: SSL Setup (HTTPS)

Secure both frontend and backend using Let's Encrypt Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com -d api.yourdomain.com
```
Follow the interactive prompts. Certbot will automatically configure HTTPS redirects and install SSL renewal timers.

---

## 9. Verification & Post-Deployment Checklist

1. **Verify Backend Health:**
   - Open `https://api.yourdomain.com/up` in your browser. Laravel should return an HTTP 200 health check status.
2. **Verify Database Connectivity:**
   - Run `php artisan db:monitor` or submit a test form on the contact page.
3. **Verify CORS Settings:**
   - Ensure `config/cors.php` allows your frontend domain. The application default is configured with `'allowed_origins' => ['*']` for seamless API communication.
4. **Test Email Delivery:**
   - Fill out the Contact Us or Request a Quote form on the frontend.
   - Verify that the notification arrives at the email defined in `NOTIFICATION_RECIPIENT_EMAIL`.
5. **Check Storage Permissions:**
   - Verify that Laravel can write logs to `storage/logs/laravel.log`.

---

## 10. Summary Quick Reference

| Component | Path / Command |
|---|---|
| **Backend Root** | `/var/www/guardian-backend` |
| **Backend Web Root** | `/var/www/guardian-backend/public` |
| **Frontend Web Root** | `/var/www/guardian-frontend` (contents of `guardian-react-app/build`) |
| **Database Dump** | `database/guardian_reinsurance_db.sql` |
| **Backend Environment** | `guardian-backend/.env` |
| **Frontend API Base** | `guardian-react-app/.env` (`REACT_APP_API_BASE_URL`) |
| **Clear Laravel Cache** | `php artisan optimize:clear` |
| **Warm Laravel Cache** | `php artisan optimize` |


