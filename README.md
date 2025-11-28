# Neon Finance AI Dashboard

A futuristic personal finance dashboard with AI-powered insights, forecasting, and anomaly detection.

## Features
- **Neon UI**: Cyberpunk-inspired aesthetic.
- **AI Forecasting**: Prophet-based income/expense prediction.
- **Anomaly Detection**: Isolation Forest to spot irregularities.
- **FIRE Engine**: Retirement simulator.
- **Smart Import**: Auto-mapping CSV importer.

## Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS (via globals), Chart.js
- **Backend**: Next.js API Routes
- **Database**: Prisma (SQLite for dev, Postgres ready)
- **ML Service**: Python (FastAPI, Scikit-Learn/Prophet)

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+

### Installation

1. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

2. **Setup Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

3. **Setup ML Service**
   ```bash
   cd ml_service
   pip install -r requirements.txt
   ```

### Running the App

1. **Start ML Service** (Terminal 1)
   ```bash
   cd ml_service
   uvicorn main:app --reload --port 8000
   ```

2. **Start Web App** (Terminal 2)
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Deployment
This app is container-ready.
```bash
docker build -t neon-finance .
docker run -p 3000:3000 neon-finance
```
