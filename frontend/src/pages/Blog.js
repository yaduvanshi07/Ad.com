import React, { useState } from 'react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Advertising in 2025",
      excerpt: "Discover the latest trends and technologies that will shape the advertising landscape in the coming year.",
      category: "Digital Marketing",
      author: "Priya Sharma",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "How to Create Compelling Newspaper Advertisements",
      excerpt: "Learn the art of crafting newspaper ads that grab attention and drive results for your business.",
      category: "Traditional Media",
      author: "Rajesh Kumar",
      date: "Dec 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Cinema Advertising: Reaching Captive Audiences",
      excerpt: "Explore the unique advantages of cinema advertising and how to maximize your campaign's impact.",
      category: "Traditional Media",
      author: "Neha Singh",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "SEO Strategies for Better Online Visibility",
      excerpt: "Master the fundamentals of SEO to improve your website's search engine rankings and drive organic traffic.",
      category: "Digital Marketing",
      author: "Amit Patel",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Building Brand Awareness Through Radio Advertising",
      excerpt: "Understand how radio advertising can help build strong brand recognition and customer loyalty.",
      category: "Traditional Media",
      author: "Priya Sharma",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Social Media Marketing: Best Practices for 2025",
      excerpt: "Stay ahead of the curve with these proven social media marketing strategies for the new year.",
      category: "Digital Marketing",
      author: "Neha Singh",
      date: "Dec 3, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  const categories = ['all', 'Digital Marketing', 'Traditional Media', 'Industry Insights', 'Case Studies'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px"
          }}>
            Our Blog
          </h1>
          <p style={{
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            opacity: "0.9"
          }}>
            Insights, tips, and industry knowledge to help you make the most of your advertising campaigns.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div style={{ padding: "60px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "28px", marginBottom: "30px", color: "#333", textAlign: "center" }}>
              Featured Article
            </h2>
            <div style={{
              backgroundColor: "white",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              minHeight: "400px"
            }}>
              <div style={{
                backgroundImage: `url(${featuredPost.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }} />
              <div style={{ padding: "40px" }}>
                <span style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "6px 12px",
                  borderRadius: "15px",
                  fontSize: "12px",
                  fontWeight: "600"
                }}>
                  {featuredPost.category}
                </span>
                <h3 style={{ fontSize: "24px", marginBottom: "15px", color: "#333", lineHeight: "1.3" }}>
                  {featuredPost.title}
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: "flex", gap: "20px", marginBottom: "25px", fontSize: "14px", color: "#888" }}>
                  <span>👤 {featuredPost.author}</span>
                  <span>📅 {featuredPost.date}</span>
                  <span>⏱️ {featuredPost.readTime}</span>
                </div>
                <button style={{
                  backgroundColor: "#667eea",
                  color: "white",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5a67d8";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#667eea";
                  e.target.style.transform = "translateY(0)";
                }}>
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts */}
      <div style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#333", textAlign: "center" }}>
            Latest Articles
          </h2>
          
          {/* Category Filter */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "40px",
            flexWrap: "wrap"
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: selectedCategory === category ? "#667eea" : "transparent",
                  color: selectedCategory === category ? "white" : "#667eea",
                  border: `2px solid #667eea`,
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "30px"
          }}>
            {filteredPosts.filter(post => !post.featured).map(post => (
              <div key={post.id} style={{
                backgroundColor: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}>
                <div style={{
                  height: "200px",
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }} />
                <div style={{ padding: "25px" }}>
                  <span style={{
                    backgroundColor: "#667eea",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}>
                    {post.category}
                  </span>
                  <h3 style={{ fontSize: "20px", marginBottom: "15px", color: "#333", lineHeight: "1.3" }}>
                    {post.title}
                  </h3>
                  <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", gap: "20px", fontSize: "14px", color: "#888" }}>
                    <span>👤 {post.author}</span>
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.filter(post => !post.featured).length === 0 && (
            <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
              <h3>No articles available in this category at the moment.</h3>
              <p>Check back later for new content.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div style={{
            backgroundColor: "white",
            padding: "60px 40px",
            borderRadius: "15px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            marginTop: "60px",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
              Stay Updated
            </h3>
            <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px", maxWidth: "600px", margin: "0 auto 30px" }}>
              Subscribe to our newsletter and get the latest advertising insights, tips, and industry news delivered to your inbox.
            </p>
            <div style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
              maxWidth: "500px",
              margin: "0 auto"
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: "1",
                  minWidth: "250px",
                  padding: "15px 20px",
                  border: "2px solid #e1e5e9",
                  borderRadius: "25px",
                  fontSize: "16px",
                  outline: "none"
                }}
              />
              <button style={{
                backgroundColor: "#667eea",
                color: "white",
                padding: "15px 30px",
                border: "none",
                borderRadius: "25px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5a67d8";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#667eea";
                e.target.style.transform = "translateY(0)";
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
