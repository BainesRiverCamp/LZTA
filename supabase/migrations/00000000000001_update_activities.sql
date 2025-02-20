ALTER TABLE activities
ADD COLUMN difficulty VARCHAR(50),
ADD COLUMN best_time VARCHAR(255),
ADD COLUMN group_size VARCHAR(100),
ADD COLUMN long_description TEXT,
ADD COLUMN what_to_expect TEXT[],
ADD COLUMN included TEXT[],
ADD COLUMN requirements TEXT[];

-- Update existing activities with more detailed information
UPDATE activities
SET 
    difficulty = 'Easy',
    best_time = 'Year-round, best during dry season (May-October)',
    group_size = 'Maximum 6 per vehicle',
    long_description = 'Experience the thrill of African wildlife up close on our signature game drives. Our expert guides will take you through the diverse landscapes of the Lower Zambezi, where you''ll have the opportunity to observe the Big Five and countless other species in their natural habitat. Our custom-designed vehicles ensure comfort and optimal viewing angles for photography.',
    what_to_expect = ARRAY[
        'Expert guides with extensive local knowledge',
        'Custom-designed 4x4 vehicles with charging points',
        'Refreshments and snacks included',
        'Flexible timing for optimal wildlife viewing',
        'Photography tips and assistance'
    ],
    included = ARRAY[
        'Professional guide',
        'Game drive vehicle',
        'Refreshments and snacks',
        'Wildlife spotting equipment',
        'Blankets and ponchos if needed'
    ],
    requirements = ARRAY[
        'Suitable for all ages',
        'No specific fitness requirements',
        'Comfortable clothing recommended',
        'Bring your camera'
    ]
WHERE name = 'Game Drive';

UPDATE activities
SET 
    difficulty = 'Easy',
    best_time = 'Year-round',
    group_size = 'Maximum 8 per boat',
    long_description = 'Cruise along the majestic Zambezi River, observing wildlife from a unique perspective. Our river safaris offer excellent opportunities for bird watching, hippo and crocodile viewing, and catching spectacular sunsets. The peaceful boat ride allows for a more relaxed wildlife viewing experience.',
    what_to_expect = ARRAY[
        'Professional boat captain and guide',
        'Comfortable seating with shade',
        'Excellent photography opportunities',
        'Sundowner drinks and snacks',
        'Close encounters with water-based wildlife'
    ],
    included = ARRAY[
        'Experienced boat captain',
        'Safety equipment',
        'Refreshments and snacks',
        'Binoculars for wildlife viewing',
        'Waterproof gear if needed'
    ],
    requirements = ARRAY[
        'Suitable for all ages',
        'Basic swimming ability recommended',
        'Sun protection advised',
        'Casual clothing suitable for boat travel'
    ]
WHERE name = 'River Safari'; 