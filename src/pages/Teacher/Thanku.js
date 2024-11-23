import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <div className="card shadow p-4">
        <h1 className="text-success">Thank You for Your Submission!</h1>
        <p className="mt-4" style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Dear Teacher,
          <br />
          Thank you for taking the time to submit your application to join our
          platform as a verified instructor. Your application has been received
          successfully and is now under review by our administrative team.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Once your application is reviewed, you will receive an email at the
          address you provided, notifying you of the outcome. We are excited to
          have you onboard and look forward to seeing your contributions in
          enhancing the learning experience for students across the platform.
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          If you have any questions or need further assistance, feel free to
          reach out to our support team. Thank you for your interest in joining
          us!
        </p>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
