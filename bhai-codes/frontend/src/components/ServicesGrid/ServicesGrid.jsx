import React from "react";

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Build modern, responsive websites using the latest technologies.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Create powerful mobile applications for iOS and Android platforms.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Design beautiful and intuitive user interfaces that users love.",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Implement scalable cloud infrastructure for your business needs.",
    },
    {
      id: 5,
      title: "API Development",
      description: "Build robust and secure APIs to power your applications.",
    },
    {
      id: 6,
      title: "Consulting",
      description:
        "Get expert advice on technology strategy and implementation.",
    },
  ];

  return (
    <section
      style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <h1>Our Services</h1>
      <p style={{ marginBottom: "40px" }}>
        We offer a comprehensive range of services to meet your business needs.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
            }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
