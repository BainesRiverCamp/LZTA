-- Add homepage_featured boolean to activities table
ALTER TABLE activities
ADD COLUMN homepage_featured BOOLEAN DEFAULT false;

-- Update existing activities and add new ones
UPDATE activities
SET 
    homepage_featured = true,
    name = 'Private Game Drives',
    description = 'Embark on personalized safari experiences in our state-of-the-art vehicles, guided by expert naturalists.',
    category = 'Wildlife'
WHERE name = 'Game Drive';

UPDATE activities
SET 
    homepage_featured = true,
    name = 'Exclusive River Safaris',
    description = 'Cruise the majestic Zambezi in comfort and style, observing wildlife from our luxurious boats.',
    category = 'Water'
WHERE name = 'River Safari';

-- Insert new activities
INSERT INTO activities (
    name, 
    description, 
    category,
    homepage_featured,
    difficulty,
    duration,
    best_time,
    group_size
) VALUES 
(
    'World-Class Tiger Fishing',
    'Challenge yourself against the legendary Tiger Fish with our professional fishing guides and top-tier equipment.',
    'Water',
    true,
    'Moderate',
    'Half-day or full-day',
    'Best from August to November',
    'Maximum 4 per boat'
),
(
    'Luxury Fly Camping',
    'Experience the wilderness in unparalleled comfort with our bespoke fly camping experiences.',
    'Adventure',
    true,
    'Moderate',
    'Overnight',
    'Dry season (May-October)',
    'Maximum 8 per camp'
); 