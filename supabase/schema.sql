-- AURA PROTOCOL FUNCTIONAL MEDICINE & LONGEVITY OS
-- SCHEMA V1.0.0 WITH ROW LEVEL SECURITY (RLS)

CREATE TABLE IF NOT EXISTS patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  biological_age NUMERIC(4,1),
  chronological_age INT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS protocols (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  duration_weeks INT NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS intake_consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
  protocol_id UUID REFERENCES protocols(id),
  consultation_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'pending_phlebotomy', -- pending_phlebotomy, lab_processing, physician_review, active_protocol
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS biomarker_telemetry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID REFERENCES patients(id) ON DELETE CASCADE,
  marker_name TEXT NOT NULL,
  marker_value NUMERIC(10,2) NOT NULL,
  unit TEXT NOT NULL,
  target_range TEXT,
  tested_at DATE NOT NULL
);

-- ENABLE RLS
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE protocols ENABLE ROW LEVEL SECURITY;
ALTER TABLE intake_consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE biomarker_telemetry ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Public protocols read" ON protocols FOR SELECT USING (true);
CREATE POLICY "Staff all access protocols" ON protocols FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access patients" ON patients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access intake" ON intake_consultations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access biomarkers" ON biomarker_telemetry FOR ALL USING (auth.role() = 'authenticated');
