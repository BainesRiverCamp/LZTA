INSERT INTO activities (
    name,
    description,
    long_description,
    category,
    duration,
    difficulty,
    best_time,
    group_size,
    icon_name,
    what_to_expect,
    whats_included,
    image_url,
    homepage_featured
) VALUES 
(
    'Game Drives',
    'Embark on thrilling game drives through the diverse landscapes of the Lower Zambezi. Spot elephants, lions, leopards, and a variety of other wildlife in their natural habitat.',
    'Experience the thrill of African wildlife up close on our signature game drives. Our expert guides will take you through the diverse landscapes of the Lower Zambezi, where you''ll have the opportunity to observe the Big Five and countless other species in their natural habitat. Our custom-designed vehicles ensure comfort and optimal viewing angles for photography.',
    'Wildlife',
    '3-4 hours',
    'Easy',
    'Year-round, best during dry season (May-October)',
    'Maximum 6 per vehicle',
    'Camera',
    ARRAY[
        'Expert guides with extensive local knowledge',
        'Custom-designed 4x4 vehicles with charging points',
        'Refreshments and snacks included',
        'Flexible timing for optimal wildlife viewing',
        'Photography tips and assistance'
    ],
    ARRAY[
        'Professional guide',
        'Vehicle and fuel',
        'Refreshments',
        'Park fees',
        'Photography guidance',
        'Binoculars'
    ],
    '/placeholder.svg?height=400&width=600',
    true
),
(
    'River Safaris',
    'Cruise along the mighty Zambezi River, observing wildlife from a unique perspective. Perfect for bird watching and spotting hippos, crocodiles, and elephants along the riverbanks.',
    'Glide along the mighty Zambezi River in our specially designed boats, offering a unique perspective on the region''s wildlife. Watch as elephants come to drink, hippos wallow in the shallows, and countless bird species soar overhead. Our experienced skippers know all the best spots for wildlife viewing and photography.',
    'Water',
    '2-3 hours',
    'Easy',
    'Year-round',
    'Maximum 8 per boat',
    'Boat',
    ARRAY[
        'Unique water-level wildlife viewing',
        'Excellent photographic opportunities',
        'Sundowner drinks and snacks',
        'Close encounters with water birds',
        'Safe viewing of hippos and crocodiles'
    ],
    ARRAY[
        'Expert skipper',
        'Safety equipment',
        'Refreshments',
        'Binoculars',
        'Camera bean bags',
        'Waterproof gear'
    ],
    '/placeholder.svg?height=400&width=600',
    true
),
(
    'Sport Fishing',
    'Test your angling skills against the legendary Tiger Fish. Enjoy catch-and-release fishing in one of Africa''s most pristine river systems.',
    'Experience the thrill of sport fishing in the pristine waters of the Zambezi River. Our experienced guides will take you to the best fishing spots, where you can try your luck at catching the legendary Tiger Fish. All equipment is provided, and we practice catch-and-release to protect the river''s ecosystem.',
    'Water',
    'Half-day or full-day',
    'Moderate',
    'Best from August to November',
    'Maximum 4 per boat',
    'Fish',
    ARRAY[
        'Experienced fishing guides',
        'High-quality fishing equipment provided',
        'Catch-and-release fishing',
        'Stunning river scenery',
        'Opportunities to spot other wildlife'
    ],
    ARRAY[
        'Professional guide',
        'Fishing rods and reels',
        'Bait and tackle',
        'Life jackets',
        'Sunscreen'
    ],
    '/placeholder.svg?height=400&width=600',
    false
),
(
    'Bush Camping',
    'Experience the true wilderness with an overnight bush camping adventure. Fall asleep to the sounds of nature and wake up to stunning African sunrises.',
    'Immerse yourself in the heart of the African wilderness with our overnight bush camping adventure. Our expert guides will set up camp in a secluded location, where you can fall asleep to the sounds of nature and wake up to breathtaking sunrises. We provide all the necessary equipment and ensure your safety and comfort.',
    'Adventure',
    'Overnight',
    'Moderate',
    'Dry season (May-October)',
    'Maximum 8 per camp',
    'Tent',
    ARRAY[
        'Secluded camping location',
        'Expert guides for safety and support',
        'All camping equipment provided',
        'Stunning night sky viewing',
        'Authentic wilderness experience'
    ],
    ARRAY[
        'Tents and sleeping bags',
        'Cooking equipment',
        'Meals and drinks',
        'Campfire',
        'First-aid kit'
    ],
    '/placeholder.svg?height=400&width=600',
    true
),
(
    'Photographic Safaris',
    'Capture the beauty of the Lower Zambezi with guided photographic safaris. Perfect your wildlife photography skills with expert tips and prime shooting locations.',
    'Capture stunning images of the Lower Zambezi''s wildlife with our guided photographic safaris. Our expert photographers will take you to prime locations and provide tips and techniques to help you improve your skills. We''ll focus on capturing the beauty of the animals and landscapes, creating memories that will last a lifetime.',
    'Wildlife',
    'Full-day',
    'Easy',
    'Year-round',
    'Maximum 6 per group',
    'Camera',
    ARRAY[
        'Expert photography guidance',
        'Prime wildlife viewing locations',
        'Learn photography techniques',
        'Capture stunning images of wildlife and landscapes',
        'Small group size for personalized attention'
    ],
    ARRAY[
        'Professional guide',
        'Transportation',
        'Park fees',
        'Refreshments',
        'Photography tips and assistance'
    ],
    '/placeholder.svg?height=400&width=600',
    false
); 