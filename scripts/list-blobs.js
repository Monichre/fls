import { list } from '@vercel/blob';

async function listAllBlobs() {
  try {
    console.log('Fetching all blobs from Vercel Blob storage...\n');
    
    const response = await list();
    
    console.log(`Found ${response.blobs.length} blobs:\n`);
    
    // Sort blobs by pathname for better organization
    const sortedBlobs = response.blobs.sort((a, b) => a.pathname.localeCompare(b.pathname));
    
    const mappings = [];
    
    sortedBlobs.forEach((blob) => {
      console.log(`- ${blob.pathname}`);
      console.log(`  URL: ${blob.url}`);
      console.log(`  Download URL: ${blob.downloadUrl}`);
      console.log(`  Size: ${blob.size} bytes`);
      console.log(`  Content Type: ${blob.contentType}`);
      console.log(`  Upload Date: ${blob.uploadedAt}`);
      console.log('');
      
      // Extract just the filename from pathname for mapping
      const filename = blob.pathname.split('/').pop();
      mappings.push({
        pathname: blob.pathname,
        filename: filename,
        url: blob.url,
        downloadUrl: blob.downloadUrl,
        contentType: blob.contentType,
        size: blob.size
      });
    });
    
    // Generate markdown mapping content
    console.log('\n=== MARKDOWN MAPPINGS ===\n');
    
    mappings.forEach(mapping => {
      console.log(`### ${mapping.filename}`);
      console.log(`- **Path**: \`${mapping.pathname}\``);
      console.log(`- **URL**: \`${mapping.url}\``);
      console.log(`- **Content Type**: ${mapping.contentType}`);
      console.log(`- **Size**: ${mapping.size} bytes`);
      console.log('');
    });
    
    return mappings;
    
  } catch (error) {
    console.error('Error listing blobs:', error);
    process.exit(1);
  }
}

// Run the script
listAllBlobs(); 