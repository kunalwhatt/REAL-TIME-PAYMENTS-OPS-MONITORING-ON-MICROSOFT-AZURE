# Real-Time UPI Payments Observability and Analytics Platform

## 1. Overview
This project presents a comprehensive observability and analytics platform for monitoring UPI (Unified Payments Interface) transactions. It integrates data engineering, analytical processing, visualization, and frontend dashboard development into a unified system.

The platform simulates high-volume digital payment transactions and provides multi-dimensional insights into system performance, reliability, and failure behavior.

---

## 2. Project Structure

upi-observability-platform/

├── dataset/
│   └── UPI_PAYMENT_DATASET.csv
│
├── screenshots/
│   ├── powerbi_dashboard.png
│   ├── azure_resources.png
│   └── web_dashboard.png
│
├── documentation/
│   └── project_report.pdf
│
├── powerbi/
│   └── upi_dashboard.pbix
│
├── web-app/
│   ├── src/
│   ├── components/
│   └── charts/
│
└── README.md

---

## 3. Technology Stack

Data Processing:
- Python (Pandas, NumPy, Matplotlib, Seaborn)

Visualization:
- Power BI Desktop

Cloud Architecture:
- Azure Event Hubs
- Azure Stream Analytics
- Azure Data Lake Storage Gen2
- Azure Synapse Analytics

Frontend:
- React (Vite)
- Tailwind CSS
- Recharts

---

## 4. Architecture

Python Data Generator
        ↓
Azure Event Hubs
        ↓
Azure Stream Analytics
   ↓              ↓
Raw Data      KPI Metrics
        ↓
Azure Data Lake Storage Gen2
        ↓
Azure Synapse Analytics
        ↓
Power BI Dashboard / Web Dashboard

---

## 5. Key Features

- KPI Monitoring (Total Transactions, Success Rate, Latency)
- Time-Based Analysis
- Bank and PSP Analytics
- Region-Based Analysis
- Failure and Latency Analysis
- Interactive Dashboards
- Raw Data Exploration

---

## 6. Execution

Power BI:
Open powerbi/upi_dashboard.pbix

Web App:
cd web-app
npm install
npm run dev

Python:
pip install pandas matplotlib seaborn

---

## 7. Conclusion

This project demonstrates a scalable analytics system for monitoring digital payment transactions using modern tools and cloud architecture.

Author:
Kunal Kumar Dappu
