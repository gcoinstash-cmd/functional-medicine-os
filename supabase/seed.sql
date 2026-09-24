-- SEED DATA FOR AURA PROTOCOL FUNCTIONAL MEDICINE OS

INSERT INTO protocols (slug, title, category, price, duration_weeks, description) VALUES
('cellular-epigenetic-reset', 'Cellular Epigenetic Reset', 'LONGEVITY & TELOMERES', 2450.00, 12, 'Comprehensive epigenetic clock analysis with intracellular NAD+ replenishment.'),
('neuro-metabolic-peptide', 'Neuro-Metabolic & Peptide Core', 'PEPTIDE OPTIMIZATION', 1850.00, 8, 'Precision peptide sequencing (BPC-157 / TB-500 / CJC-Ipam) with neuro-endocrine mapping.'),
('microbiome-autoimmune', 'Microbiome & Autoimmune Defense', 'GUT AXIS & IMMUNOLOGY', 1650.00, 16, 'Metagenomic whole-genome stool sequencing paired with mucosal barrier restoration.'),
('cardio-metabolic-plaque', 'Cardio-Metabolic Plaque Intercept', 'PRECISION CARDIOLOGY', 2200.00, 52, 'Cleerly AI coronary plaque volume modeling and lipid sub-fraction fractionation.');

INSERT INTO patients (full_name, email, phone, biological_age, chronological_age) VALUES
('Elena Rostova', 'elena.rostova@example.com', '+1 (555) 234-9812', 36.4, 42),
('David K. Vance', 'david.vance@example.com', '+1 (555) 876-1290', 48.1, 54),
('Dr. Sarah Jenkins', 'dr.jenkins@example.com', '+1 (555) 432-8711', 41.0, 47);

INSERT INTO biomarker_telemetry (patient_id, marker_name, marker_value, unit, target_range, tested_at) VALUES
((SELECT id FROM patients WHERE email='elena.rostova@example.com'), 'NAD+ Intracellular', 48.2, 'uM', '> 40.0 uM', '2026-09-15'),
((SELECT id FROM patients WHERE email='elena.rostova@example.com'), 'hs-CRP', 0.35, 'mg/L', '< 0.5 mg/L', '2026-09-15'),
((SELECT id FROM patients WHERE email='david.vance@example.com'), 'ApoB', 58.0, 'mg/dL', '< 60.0 mg/dL', '2026-09-18');
