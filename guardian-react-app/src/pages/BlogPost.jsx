import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog content - To be filled from Word documents
  const blogPosts = {
    'reinsurance-outlook-african-continent': {
      title: 'Thought Leadership: Reinsurance Outlook on the African Continent',
      category: 'Industry Insights',
      author: 'Guardian Reinsurance Team',
      date: 'June 15, 2026',
      readTime: '8 min read',
      image: '/images/expertise.jpg',
      tags: ['Africa', 'Market Analysis', 'Industry Trends'],
      content: `
        <h2>Introduction</h2>
        <p>The African continent presents a unique and dynamic landscape for reinsurance, characterized by both significant challenges and unprecedented opportunities. As economies across Africa continue to grow and develop, the role of reinsurance in supporting economic stability and growth becomes increasingly critical.</p>

        <h2>Current Market Landscape</h2>
        <p>Africa's reinsurance market has experienced substantial growth over the past decade, driven by economic development, increased insurance penetration, and a growing awareness of risk management. However, the continent still faces unique challenges including limited capacity, regulatory variations across countries, and infrastructure gaps.</p>

        <h2>Emerging Opportunities</h2>
        <p>Despite the challenges, Africa offers enormous potential for reinsurance growth. The continent's young and growing population, rapid urbanization, and increasing middle class create expanding insurance needs. Additionally, climate change and natural catastrophe risks highlight the critical need for sophisticated risk transfer solutions.</p>

        <h2>Regional Dynamics</h2>
        <p>Each region in Africa presents distinct characteristics. East Africa shows strong growth in microinsurance and agricultural insurance, while West Africa is developing robust regulatory frameworks. Southern Africa maintains more mature markets with sophisticated reinsurance arrangements, and North Africa benefits from proximity to European markets.</p>

        <h2>Technology and Innovation</h2>
        <p>Digital transformation is reshaping African reinsurance. Mobile technology, blockchain, and data analytics are enabling more efficient operations, better risk assessment, and increased accessibility. Insurtech startups are partnering with traditional reinsurers to create innovative products tailored to African needs.</p>

        <h2>Regulatory Environment</h2>
        <p>Regulatory frameworks continue to evolve across the continent. Many countries are adopting risk-based capital requirements and enhancing consumer protection measures. Regional harmonization efforts, such as those by the African Insurance Organisation (AIO), are working to create more consistent standards.</p>

        <h2>The Path Forward</h2>
        <p>The future of reinsurance in Africa is promising. Successful strategies will require local expertise, strong partnerships, innovative products, and a long-term commitment to the continent. Reinsurers who invest in understanding local markets, building capacity, and developing tailored solutions will be well-positioned for success.</p>

        <h2>Conclusion</h2>
        <p>Africa's reinsurance sector stands at a critical juncture. With the right approaches, investments, and partnerships, the continent can develop a robust reinsurance market that supports economic growth, protects against risks, and contributes to the financial security of millions of Africans.</p>

        <p><em>Note: The full content from the Word document should be inserted here. This is a template structure.</em></p>
      `
    },
    'facultative-vs-treaty-reinsurance': {
      title: 'What is the Difference Between Facultative and Treaty Reinsurance?',
      category: 'Educational',
      author: 'Guardian Reinsurance Team',
      date: 'May 28, 2026',
      readTime: '6 min read',
      image: '/images/treaty.jpg',
      tags: ['Facultative', 'Treaty', 'Education'],
      content: `
        <h2>Understanding Reinsurance Basics</h2>
        <p>Reinsurance is essentially "insurance for insurance companies." When an insurance company wants to reduce its risk exposure, it purchases reinsurance. There are two primary types of reinsurance arrangements: facultative and treaty reinsurance. Understanding the differences between these two approaches is crucial for effective risk management.</p>

        <h2>Facultative Reinsurance</h2>
        <p>Facultative reinsurance is negotiated separately for each individual risk or policy. In this arrangement, the reinsurer evaluates each risk on its own merits and decides whether to accept it, decline it, or propose modified terms.</p>

        <h3>Key Characteristics of Facultative Reinsurance:</h3>
        <ul>
          <li><strong>Individual Assessment:</strong> Each risk is underwritten separately</li>
          <li><strong>Flexibility:</strong> Terms can be customized for specific risks</li>
          <li><strong>Optional:</strong> Both parties can choose whether to proceed</li>
          <li><strong>Large or Unusual Risks:</strong> Often used for high-value or unique exposures</li>
          <li><strong>No Automatic Coverage:</strong> Each risk requires separate negotiation</li>
        </ul>

        <h2>Treaty Reinsurance</h2>
        <p>Treaty reinsurance is a standing agreement that automatically covers a specified class or portfolio of risks. Once the treaty is in place, all qualifying policies are automatically reinsured according to the treaty terms.</p>

        <h3>Key Characteristics of Treaty Reinsurance:</h3>
        <ul>
          <li><strong>Automatic Coverage:</strong> All risks within defined parameters are covered</li>
          <li><strong>Portfolio Approach:</strong> Covers multiple policies under one agreement</li>
          <li><strong>Efficiency:</strong> Reduces administrative burden</li>
          <li><strong>Predictability:</strong> Provides consistent protection</li>
          <li><strong>Long-term Relationships:</strong> Often multi-year agreements</li>
        </ul>

        <h2>Key Differences</h2>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Facultative</th>
              <th>Treaty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coverage</td>
              <td>Individual risks</td>
              <td>Portfolio of risks</td>
            </tr>
            <tr>
              <td>Negotiation</td>
              <td>Case-by-case</td>
              <td>One-time agreement</td>
            </tr>
            <tr>
              <td>Flexibility</td>
              <td>High</td>
              <td>Moderate</td>
            </tr>
            <tr>
              <td>Administrative Work</td>
              <td>Higher</td>
              <td>Lower</td>
            </tr>
            <tr>
              <td>Best For</td>
              <td>Large, unusual risks</td>
              <td>Standard business portfolios</td>
            </tr>
          </tbody>
        </table>

        <h2>When to Use Each Type</h2>
        <p><strong>Facultative reinsurance</strong> is ideal for risks that exceed treaty limits, unusual or non-standard risks, risks in new territories, or when special terms are needed.</p>

        <p><strong>Treaty reinsurance</strong> works best for standard business portfolios, ongoing risk management needs, cost-effective administration, and building long-term reinsurance relationships.</p>

        <h2>Hybrid Approaches</h2>
        <p>Many insurance companies use a combination of both approaches. They maintain treaty arrangements for their core business while using facultative reinsurance for exceptional risks that fall outside treaty parameters.</p>

        <h2>Conclusion</h2>
        <p>Both facultative and treaty reinsurance play vital roles in risk management. The choice between them depends on your specific needs, risk profile, and business strategy. At Guardian Reinsurance, we provide expert guidance on both approaches to help you optimize your reinsurance program.</p>

        <p><em>Note: The full content from the Word document should be inserted here. This is a template structure.</em></p>
      `
    },
    'reinsurance-mental-health-lessons': {
      title: 'What Reinsurance Teaches Us About Mental Health',
      category: 'Thought Leadership',
      author: 'Guardian Reinsurance Team',
      date: 'April 10, 2026',
      readTime: '5 min read',
      image: '/images/consultant.jpg',
      tags: ['Mental Health', 'Risk Management', 'Wellness'],
      content: `
        <h2>Introduction</h2>
        <p>At first glance, reinsurance and mental health might seem worlds apart. However, the principles that guide effective risk management in reinsurance offer surprising insights into maintaining and protecting our mental well-being.</p>

        <h2>1. The Power of Risk Diversification</h2>
        <p>In reinsurance, we never put all our eggs in one basket. Similarly, mental resilience comes from diversifying our sources of happiness, fulfillment, and support. Relying on a single aspect of life—be it work, relationships, or achievements—creates vulnerability.</p>

        <h2>2. Building Reserve Capacity</h2>
        <p>Just as reinsurers maintain reserves for unexpected claims, we need emotional and mental reserves. This means investing in self-care, rest, and recovery during calm periods so we have resources available during stressful times.</p>

        <h2>3. The Importance of Early Detection</h2>
        <p>Risk assessment in reinsurance relies on identifying potential problems early. Similarly, recognizing early signs of stress, burnout, or mental health challenges allows for timely intervention and prevention of more serious issues.</p>

        <h2>4. Sharing the Load</h2>
        <p>Reinsurance is fundamentally about sharing risk. Mental health wellness also benefits from sharing our burdens—whether with friends, family, therapists, or support groups. We're not meant to carry everything alone.</p>

        <h2>5. Continuous Assessment and Adjustment</h2>
        <p>Reinsurers continuously monitor and adjust their portfolios. Our mental health requires similar attention. Regular check-ins, adjustments to our routines, and willingness to change strategies when something isn't working are essential.</p>

        <h2>6. The Value of Professional Guidance</h2>
        <p>Just as insurance companies rely on reinsurance brokers for expert guidance, there's immense value in seeking professional help for mental health. Therapists, counselors, and psychiatrists provide specialized expertise.</p>

        <h2>7. Understanding Capacity Limits</h2>
        <p>Every reinsurer has capacity limits—the maximum amount of risk they can accept. Similarly, we each have mental and emotional capacity limits. Recognizing and respecting these limits isn't weakness; it's wisdom.</p>

        <h2>8. The Ripple Effect</h2>
        <p>In reinsurance, one major event can have cascading effects. Mental health challenges similarly ripple through our lives, affecting work, relationships, and physical health. This interconnectedness underscores the importance of holistic care.</p>

        <h2>9. Long-term Planning</h2>
        <p>Reinsurance strategies focus on long-term stability, not just immediate concerns. Mental health wellness requires similar long-term thinking—building sustainable habits and systems rather than seeking quick fixes.</p>

        <h2>10. Community and Support Networks</h2>
        <p>The reinsurance market thrives on relationships and mutual support. Our mental health similarly benefits from strong support networks and community connections.</p>

        <h2>Conclusion</h2>
        <p>The principles of reinsurance—risk management, capacity building, early intervention, and shared burden—translate remarkably well to mental health. By applying these concepts to our personal well-being, we can build greater resilience and create sustainable approaches to mental health.</p>

        <p>At Guardian Reinsurance, we believe that protecting what matters extends beyond financial risks to the well-being of the people in our industry and communities.</p>

        <p><em>Note: The full content from the Word document should be inserted here. This is a template structure.</em></p>
      `
    },
    'world-aids-day-commitment': {
      title: 'World AIDS Day: Our Commitment to Social Responsibility',
      category: 'Corporate Social Responsibility',
      author: 'Guardian Reinsurance Team',
      date: 'December 1, 2025',
      readTime: '4 min read',
      image: '/images/global-connectivity.jpg',
      tags: ['CSR', 'Health', 'Community'],
      content: `
        <h2>Marking World AIDS Day</h2>
        <p>Every December 1st, the world comes together to observe World AIDS Day—a day to show support for people living with HIV, remember those who have lost their lives to AIDS-related illnesses, and renew our commitment to ending the HIV/AIDS epidemic.</p>

        <h2>Why This Matters to Us</h2>
        <p>At Guardian Reinsurance, we recognize that our responsibility extends beyond financial risk management. We are committed to supporting the communities in which we operate and addressing critical health and social issues.</p>

        <h2>The Global Impact of HIV/AIDS</h2>
        <p>Despite significant medical advances, HIV/AIDS remains a major global health challenge, particularly in Africa. Understanding the scope of this challenge is essential to creating effective responses.</p>

        <h2>Our Commitment to Action</h2>
        <p>Guardian Reinsurance's commitment to addressing HIV/AIDS includes several key initiatives:</p>

        <h3>1. Employee Education and Awareness</h3>
        <p>We provide comprehensive education programs to ensure our team understands HIV/AIDS, reducing stigma and promoting informed support.</p>

        <h3>2. Healthcare Support</h3>
        <p>Our employee benefits include comprehensive healthcare coverage that supports those affected by HIV/AIDS.</p>

        <h3>3. Community Partnerships</h3>
        <p>We partner with organizations working on HIV/AIDS prevention, treatment, and support services in our operational regions.</p>

        <h3>4. Non-Discrimination Policies</h3>
        <p>We maintain strict non-discrimination policies that protect employees and clients regardless of HIV status.</p>

        <h3>5. Insurance Access</h3>
        <p>We work to improve access to insurance products for people living with HIV, recognizing that financial protection is crucial for managing this chronic condition.</p>

        <h2>The Insurance Industry's Role</h2>
        <p>The insurance and reinsurance sector has a unique role to play in the HIV/AIDS response. By providing financial protection and supporting healthcare systems, we contribute to better health outcomes and economic stability.</p>

        <h2>Progress and Challenges</h2>
        <p>While significant progress has been made in HIV/AIDS treatment and prevention, challenges remain. Stigma, discrimination, and access to care continue to be barriers that require ongoing attention and action.</p>

        <h2>Our Ongoing Commitment</h2>
        <p>World AIDS Day is not just one day of awareness for us—it's a reminder of our year-round commitment to:</p>
        <ul>
          <li>Supporting employees and clients affected by HIV/AIDS</li>
          <li>Promoting education and awareness</li>
          <li>Fighting stigma and discrimination</li>
          <li>Contributing to improved healthcare access</li>
          <li>Partnering with organizations making a difference</li>
        </ul>

        <h2>How You Can Help</h2>
        <p>Individual actions matter. Whether through education, volunteering, donations, or simply treating everyone with dignity and respect, we can all contribute to ending the HIV/AIDS epidemic.</p>

        <h2>Conclusion</h2>
        <p>Guardian Reinsurance believes that corporate social responsibility means taking meaningful action on issues that affect our communities. As we observe World AIDS Day, we renew our commitment to being part of the solution—creating a world where everyone has access to prevention, treatment, and support, free from stigma and discrimination.</p>

        <p>Together, we can make a difference. Together, we can end AIDS.</p>

        <p><em>Note: The full content from the Word document should be inserted here. This is a template structure.</em></p>
      `
    },
    'linkedin-best-practices': {
      title: 'LinkedIn Best Practices for Reinsurance Professionals',
      category: 'Professional Development',
      author: 'Guardian Reinsurance Team',
      date: 'March 20, 2026',
      readTime: '5 min read',
      image: '/images/strategic-analysis.jpg',
      tags: ['LinkedIn', 'Networking', 'Professional Growth'],
      content: `
        <h2>Introduction</h2>
        <p>In today's digital age, LinkedIn has become an essential platform for reinsurance professionals. Whether you're building your network, establishing thought leadership, or staying informed about industry trends, a strategic approach to LinkedIn can significantly advance your career and business objectives.</p>

        <h2>Optimizing Your Profile</h2>
        <h3>Professional Headline</h3>
        <p>Your headline should go beyond your job title. Include your specialization, value proposition, or area of expertise. For example: "Reinsurance Broker | Specialty: Treaty Placements | Serving East African Markets"</p>

        <h3>Compelling Summary</h3>
        <p>Use your summary to tell your professional story. Highlight your expertise, achievements, and what drives you in the reinsurance industry. Include keywords relevant to your specialty.</p>

        <h3>Experience Section</h3>
        <p>Don't just list responsibilities—showcase achievements and impact. Use metrics where possible. For example: "Negotiated treaty placements totaling $50M in capacity across multiple markets."</p>

        <h2>Building Your Network</h2>
        <h3>Strategic Connections</h3>
        <p>Connect with:</p>
        <ul>
          <li>Industry peers and competitors (professional competition builds expertise)</li>
          <li>Clients and prospects</li>
          <li>Reinsurers and capacity providers</li>
          <li>Industry association members</li>
          <li>Regulators and thought leaders</li>
        </ul>

        <h3>Personalized Connection Requests</h3>
        <p>Always include a note with connection requests. Reference common ground, mutual connections, or specific reasons for connecting.</p>

        <h2>Content Strategy</h2>
        <h3>What to Share</h3>
        <ul>
          <li><strong>Industry insights:</strong> Analysis of market trends, regulatory changes, emerging risks</li>
          <li><strong>Educational content:</strong> Explaining complex reinsurance concepts</li>
          <li><strong>Company news:</strong> Placements, appointments, achievements</li>
          <li><strong>Thought leadership:</strong> Your perspectives on industry challenges and opportunities</li>
        </ul>

        <h3>Content Mix</h3>
        <p>Follow the 80/20 rule: 80% valuable, educational, or entertaining content; 20% promotional content about your services or company.</p>

        <h3>Posting Frequency</h3>
        <p>Consistency matters more than frequency. Aim for 2-3 quality posts per week rather than daily posts of variable quality.</p>

        <h2>Engagement Best Practices</h2>
        <h3>Meaningful Interactions</h3>
        <p>Don't just "like" posts—add thoughtful comments that contribute to the conversation. Share your expertise and insights.</p>

        <h3>Responding to Comments</h3>
        <p>When people comment on your posts, respond promptly and meaningfully. This encourages further engagement and builds relationships.</p>

        <h3>LinkedIn Groups</h3>
        <p>Join and actively participate in reinsurance-related groups. Share insights, ask questions, and connect with active members.</p>

        <h2>Thought Leadership</h2>
        <h3>LinkedIn Articles</h3>
        <p>Write longer-form articles on LinkedIn about topics where you have deep expertise. This establishes you as a thought leader.</p>

        <h3>Document Sharing</h3>
        <p>Share presentations, reports, or guides that provide value to your network. Use LinkedIn's document feature for maximum visibility.</p>

        <h2>Professional Etiquette</h2>
        <h3>Do:</h3>
        <ul>
          <li>Maintain professional tone</li>
          <li>Respect confidentiality</li>
          <li>Give credit to others' ideas</li>
          <li>Be responsive to messages</li>
          <li>Congratulate others on achievements</li>
        </ul>

        <h3>Don't:</h3>
        <ul>
          <li>Send spam messages</li>
          <li>Share confidential client information</li>
          <li>Engage in heated debates</li>
          <li>Over-promote your services</li>
          <li>Neglect your profile updates</li>
        </ul>

        <h2>Measuring Success</h2>
        <p>Track these metrics:</p>
        <ul>
          <li>Profile views</li>
          <li>Connection growth</li>
          <li>Post engagement (likes, comments, shares)</li>
          <li>Inbound messages from prospects</li>
          <li>Content reach and impressions</li>
        </ul>

        <h2>Advanced Strategies</h2>
        <h3>LinkedIn Live</h3>
        <p>Consider hosting LinkedIn Live sessions on relevant topics—market updates, Q&A sessions, or panel discussions.</p>

        <h3>Newsletter</h3>
        <p>Start a LinkedIn newsletter to regularly share industry insights with your network.</p>

        <h3>Recommendations</h3>
        <p>Give and request recommendations from clients, colleagues, and partners. These add credibility to your profile.</p>

        <h2>Conclusion</h2>
        <p>LinkedIn is a powerful tool for reinsurance professionals when used strategically. By optimizing your profile, sharing valuable content, engaging meaningfully, and building genuine relationships, you can establish yourself as a trusted expert and grow your professional network.</p>

        <p>At Guardian Reinsurance, we're active on LinkedIn and always eager to connect with industry professionals. Let's connect and grow together!</p>

        <p><em>Note: The full content from the Word document should be inserted here. This is a template structure.</em></p>
      `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl text-primary mb-4">Article Not Found</h1>
            <Link to="/blog" className="text-secondary hover:text-tertiary">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="pt-20">
        {/* Article Header */}
        <article>
          <div className="relative h-[60vh] min-h-[500px]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 pb-16">
              <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-4xl">
                  <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span>Back to Blog</span>
                  </Link>
                  
                  <span className="inline-block bg-secondary text-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-6">
                    {post.category}
                  </span>
                  
                  <h1 className="font-display-lg text-3xl md:text-5xl text-white mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">person</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">calendar_today</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-white py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="max-w-4xl mx-auto">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-surface text-text-secondary px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:font-headline-md prose-headings:text-primary
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-secondary prose-a:no-underline hover:prose-a:text-tertiary
                    prose-strong:text-primary prose-strong:font-semibold
                    prose-ul:text-text-secondary prose-ul:my-6
                    prose-li:mb-2
                    prose-table:border-collapse prose-table:w-full
                    prose-th:bg-surface prose-th:p-3 prose-th:text-left prose-th:font-semibold
                    prose-td:border prose-td:border-outline-variant/30 prose-td:p-3"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-outline-variant/30">
                  <h3 className="text-xl font-semibold text-primary mb-4">Share this article</h3>
                  <div className="flex gap-3">
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">share</span>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-surface hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">share</span>
                    </a>
                    <a href={`mailto:?subject=${post.title}&body=Check out this article: ${window.location.href}`} className="w-12 h-12 bg-surface hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all">
                      <span className="material-symbols-outlined">mail</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles CTA */}
          <div className="bg-surface py-16">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-headline-md text-primary mb-4">
                  More Insights & Articles
                </h3>
                <p className="text-text-secondary mb-8">
                  Explore more expert perspectives and industry analysis
                </p>
                <Link 
                  to="/blog"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-tertiary transition-all"
                >
                  <span>View All Articles</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
