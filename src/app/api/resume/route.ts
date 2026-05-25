import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";

export async function GET() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;
  let y = 18;

  const addLine = (yPos: number) => {
    doc.setDrawColor(60, 60, 80);
    doc.setLineWidth(0.3);
    doc.line(margin, yPos, pageWidth - margin, yPos);
  };

  // --- Header ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 40);
  doc.text("INDUPALLI SUMANTH", pageWidth / 2, y, { align: "center" });
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 100);
  doc.text(
    "Software Engineer — Java — C++ — Data Structures — Full Stack Development",
    pageWidth / 2,
    y,
    { align: "center" }
  );
  y += 5;
  doc.text(
    "Hyderabad, India  |  isumanth8@gmail.com  |  LinkedIn: indupalli-sumanth-07b6651b8",
    pageWidth / 2,
    y,
    { align: "center" }
  );
  y += 5;
  addLine(y);
  y += 6;

  // --- Professional Summary ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 40);
  doc.text("Professional Summary", margin, y);
  y += 5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 60);
  const summary =
    "Software Engineer with 2 years of experience in designing, developing, and maintaining scalable software applications. Strong foundation in computer science fundamentals including data structures, algorithms, object-oriented design, and software engineering principles. Experienced in building RESTful APIs, multi-tier applications, and backend systems with a focus on performance, reliability, and code quality. Passionate about writing clean, testable code and continuously improving engineering productivity.";
  const summaryLines = doc.splitTextToSize(summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.2 + 3;
  addLine(y);
  y += 6;

  // --- Technical Skills ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 40);
  doc.text("Technical Skills", margin, y);
  y += 6;

  const skills = [
    ["Programming Languages:", "Java, C++, Python, TypeScript, JavaScript"],
    ["Web Development:", "Angular, Node.js, RESTful APIs, Next.js, React"],
    ["Database:", "PostgreSQL (Functions, Queries, Optimization)"],
    ["Computer Science:", "Data Structures, Algorithms, Object-Oriented Design, Software Design Patterns"],
    ["Cloud & Tools:", "AWS (S3), Git, VS Code, Docker"],
    ["Engineering Practices:", "SDLC, Code Reviews, Unit Testing, Continuous Integration"],
  ];

  doc.setFontSize(9.5);
  for (const [label, value] of skills) {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(50, 50, 60);
    doc.text(label, margin + 2, y);
    const labelWidth = doc.getTextWidth(label) + 2;
    doc.setFont("helvetica", "normal");
    doc.text(value, margin + 2 + labelWidth, y);
    y += 5;
  }
  y += 1;
  addLine(y);
  y += 6;

  // --- Experience ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 40);
  doc.text("Experience", margin, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 50);
  doc.text("Accenture", margin + 2, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 120);
  doc.text("Hyderabad, India", pageWidth - margin, y, { align: "right" });
  y += 5;

  doc.setFont("helvetica", "italic");
  doc.setTextColor(50, 50, 60);
  doc.text("Packaged App Development Associate", margin + 2, y);
  doc.text("Feb 2024 – Present", pageWidth - margin, y, { align: "right" });
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 100);
  doc.text("Project: Supplier Hub", margin + 2, y);
  y += 5;

  const bullets = [
    "Designed, developed, and maintained backend and frontend components of a multi-tier enterprise application following standard software engineering practices.",
    "Implemented complex PostgreSQL database functions to process and integrate high-volume supplier data into downstream SAP systems, ensuring consistency and performance.",
    "Developed scalable RESTful APIs using Node.js to support report generation and data access for user-facing applications.",
    "Built dynamic and reusable Angular UI components, improving usability and enabling user-centric workflows.",
    "Applied object-oriented design principles and data structures to implement business logic efficiently and reliably.",
    "Contributed to code reviews, debugging, and issue resolution to maintain high code quality and application stability.",
    "Worked collaboratively with cross-functional engineering and business teams, delivering features with minimal supervision and within defined timelines.",
  ];

  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 60);
  for (const bullet of bullets) {
    const lines = doc.splitTextToSize(bullet, contentWidth - 8);
    doc.text("•", margin + 3, y);
    doc.text(lines, margin + 7, y);
    y += lines.length * 4 + 1.5;
  }

  y += 2;
  addLine(y);
  y += 6;

  // --- Education ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 40);
  doc.text("Education", margin, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 50);
  doc.text("Prasad V. Potluri Siddhartha Institute of Technology", margin + 2, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(100, 100, 120);
  doc.text("Andhra Pradesh", pageWidth - margin, y, { align: "right" });
  y += 5;

  doc.setFont("helvetica", "italic");
  doc.setTextColor(50, 50, 60);
  doc.text("Bachelor of Technology (B.Tech) in Information Technology", margin + 2, y);
  doc.text("Jun 2019 – May 2023", pageWidth - margin, y, { align: "right" });
  y += 5;
  addLine(y);
  y += 6;

  // --- Certifications ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 40);
  doc.text("Certifications", margin, y);
  y += 6;

  const certs = [
    "Google Cloud Digital Leader",
    "AWS Academy Graduate – Cloud Foundations",
    "SQL (Basic), SQL (Advanced) – HackerRank",
    "Python Basic Certificate – HackerRank",
    "Java Training",
  ];

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(50, 50, 60);
  for (const cert of certs) {
    doc.text("•", margin + 3, y);
    doc.text(cert, margin + 7, y);
    y += 5;
  }

  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Indupalli_Sumanth_Resume.pdf"',
    },
  });
}
