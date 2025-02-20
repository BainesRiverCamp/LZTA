-- Add new columns for activity details
ALTER TABLE activities
ADD COLUMN category VARCHAR(50),
ADD COLUMN difficulty VARCHAR(50),
ADD COLUMN best_time VARCHAR(255),
ADD COLUMN group_size VARCHAR(100),
ADD COLUMN whats_included TEXT[],
ADD COLUMN park_fees BOOLEAN DEFAULT true,
ADD COLUMN vehicle_fuel BOOLEAN DEFAULT true,
ADD COLUMN refreshments BOOLEAN DEFAULT true,
ADD COLUMN photography_guidance BOOLEAN DEFAULT true,
ADD COLUMN binoculars BOOLEAN DEFAULT true,
ADD COLUMN professional_guide BOOLEAN DEFAULT true;

-- Update existing Game Drive activity
UPDATE activities
SET 
    category = 'Wildlife',
    difficulty = 'Easy',
    best_time = 'Year-round, best during dry season (May-October)',
    group_size = 'Maximum 6 per vehicle',
    whats_included = ARRAY[
        'Professional guide',
        'Vehicle and fuel',
        'Park fees',
        'Photography guidance',
        'Refreshments',
        'Binoculars'
    ],
    park_fees = true,
    vehicle_fuel = true,
    refreshments = true,
    photography_guidance = true,
    binoculars = true,
    professional_guide = true
WHERE name = 'Game Drive'; 