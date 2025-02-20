-- Create lodges table
CREATE TABLE lodges (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    website VARCHAR(255),
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false
);

-- Create activities table
CREATE TABLE activities (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(100),
    price_range VARCHAR(100),
    image_url TEXT,
    lodge_id BIGINT REFERENCES lodges(id) ON DELETE CASCADE
);

-- Create seasons table
CREATE TABLE seasons (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description TEXT,
    weather_info TEXT
);

-- Add some sample data
INSERT INTO lodges (name, description, location, is_featured) VALUES
('Royal Zambezi Lodge', 'Luxury lodge on the banks of the Zambezi', 'Lower Zambezi National Park', true),
('Chongwe River Camp', 'Beautiful camp at the confluence of the Chongwe and Zambezi Rivers', 'Lower Zambezi', true);

INSERT INTO activities (name, description, duration, lodge_id) VALUES
('Game Drive', 'Experience wildlife in their natural habitat', '3-4 hours', 1),
('River Safari', 'Explore the Zambezi River by boat', '2-3 hours', 1);

INSERT INTO seasons (name, start_date, end_date, description) VALUES
('Green Season', '2024-11-01', '2025-04-30', 'Lush vegetation and occasional rains'),
('Dry Season', '2024-05-01', '2024-10-31', 'Perfect game viewing conditions'); 