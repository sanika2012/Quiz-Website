import React from 'react';
import './Blog.css'; // or BlogPage.css

function Blog() {
  return (
    <div className="blog-container">
      <header className="blog-header">
        <h1><u>Hackathon Fest 2024!</u></h1>
      </header>
      <article className="blog-content">
        <section>
            <div className="headings">
            <h2 className="center-heading">Join Us for Hackathon Fest 2024!</h2>
          <p>
            We are excited to announce Hackathon Fest 2024, where tech enthusiasts, developers, and designers come together to innovate, collaborate, and create! Whether you're a pro or a beginner, this is your chance to shine, network, and make an impact.
          </p>
            </div>

        </section>
        <section>
          <h3>Event Highlights:</h3>
          <ul>
            <li><strong>Challenges:</strong> Solve real-world problems with your tech skills.</li>
            <li><strong>Mentorship:</strong> Learn from industry experts.</li>
            <li><strong>Networking:</strong> Connect with like-minded individuals and industry leaders.</li>
            <li><strong>Prizes:</strong> Win cash, gadgets, and more!</li>
          </ul>
        </section>
        <section>
          <h3>Event Details:</h3>
          <ul>
            <li><strong>Date:</strong> August 15-17, 2024</li>
            <li><strong>Venue:</strong> Enable IT Solutions Pvt.Ltd , Nagpur</li>
            <li><strong>Register by:</strong> July 31, 2024</li>
          </ul>
        </section>
        <section>
          <h3>How to Participate:</h3>
          <ol>
            <li><strong>Register</strong> on our <a href="#">website</a> by July 31, 2024.</li>
            <li><strong>Form a Team</strong> or join one at the event.</li>
            <li><strong>Choose a Challenge</strong> and start hacking.</li>
            <li><strong>Present Your Project</strong> to win amazing prizes.</li>
          </ol>
        </section>
        <section>
          <h3>Why Join?</h3>
          <ul>
            <li><strong>Learn and Grow</strong> your skills.</li>
            <li><strong>Get Noticed</strong> by potential employers and investors.</li>
            <li><strong>Make an Impact</strong> on society.</li>
            <li><strong>Have Fun</strong> with social activities and entertainment.</li>
          </ul>
        </section>
        <section>
          <h3>Register Now!</h3>
          <p>
            Don't miss out on Hackathon Fest 2024. Visit our <a href="#">website</a> for more info or contact us at <a href="mailto:email@example.com">email@example.com</a>. Follow us on social media for updates.
          </p>
          <p>Join us for a weekend of innovation and inspiration. We can't wait to see what you create!</p>
        </section>
      </article>
    </div>
  );
}

export default Blog;
