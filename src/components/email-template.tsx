import * as React from "react";

interface EmailTemplateProps {
  name: string;
  senderEmail: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  senderEmail,
  message,
}: EmailTemplateProps) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      lineHeight: "1.6",
      color: "#333",
    }}
  >
    <table
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              backgroundColor: "#4CAF50",
              color: "#fff",
              padding: "20px",
              textAlign: "center",
              fontSize: "24px",
            }}
          >
            New Contact Form Submission
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: "20px", textAlign: "left" }}>
            <p style={{ fontSize: "18px", margin: "0 0 10px" }}>
              Hi, you have received a new message from your contact form:
            </p>
            <table
              width="100%"
              style={{
                borderCollapse: "collapse",
                marginTop: "20px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Name:
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    {name}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Email:
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    {senderEmail}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    Message:
                  </td>
                  <td
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                    }}
                  >
                    {message}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            style={{
              backgroundColor: "#f9f9f9",
              padding: "10px",
              textAlign: "center",
              fontSize: "14px",
              color: "#666",
            }}
          >
            © {new Date().getFullYear()} Your Service. All rights reserved.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
