import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { mkdir } from 'fs/promises';
import { createWriteStream } from 'fs';

const uploadMedia = async (file: File): Promise<NextResponse | undefined> => {
  try {
    // Generate a unique file name
    const fileName = `${uuidv4()}-${file.name}`;
    
    // Create the media directory if it doesn't exist
    await mkdir('public/media', { recursive: true });
    
    // Write the file to the public/media directory
    const filePath = `public/media/${fileName}`;
    const fileStream = createWriteStream(filePath);
    
    const reader = new FileReader();
    reader.onload = async () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const array = new Uint8Array(arrayBuffer);
      
      let i = 0;
      while (i < array.length) {
        const chunk = array.slice(i, i + 1024);
        i += chunk.length;
        fileStream.write(chunk);
      }
      fileStream.close();
      
      return NextResponse.json({ success: true, url: `/${filePath}` });
    };
    
    reader.onerror = () => {
      return NextResponse.json({ success: false, error: 'Failed to read file' });
    };
    
    reader.readAsArrayBuffer(file);
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message });
  }
};

export default uploadMedia;
