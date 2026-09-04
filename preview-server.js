const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  let reqUrl = req.url.split('?')[0];

  // Handle local enquiry logging & saving
  if (req.method === 'POST' && reqUrl === '/api/enquire') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const timestamp = new Date().toISOString();
        const entry = { timestamp, ...data };

        console.log('\n======================================================');
        console.log('💍 NEW WEDDING HAIR ENQUIRY RECEIVED:');
        console.log(`   Bride:    ${entry["Bride's Name"] || entry.name}`);
        console.log(`   Email:    ${entry["Email Address"] || entry.email}`);
        console.log(`   Date:     ${entry["Wedding Date"] || entry["wedding-date"]}`);
        console.log(`   Party:    ${entry["Party Size"] || entry["party-size"]}`);
        console.log(`   Location: ${entry["Getting-Ready Location"] || entry.location}`);
        console.log(`   Budget:   ${entry["Budget Band"] || entry["budget-band"]}`);
        console.log(`   Notes:    ${entry["Notes"] || entry.notes}`);
        console.log('======================================================\n');

        const enquiriesFile = path.join(ROOT_DIR, 'enquiries.json');
        let list = [];
        if (fs.existsSync(enquiriesFile)) {
          try { list = JSON.parse(fs.readFileSync(enquiriesFile, 'utf8')); } catch (_) { list = []; }
        }
        list.push(entry);
        fs.writeFileSync(enquiriesFile, JSON.stringify(list, null, 2), 'utf8');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, message: 'Enquiry saved locally' }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Redirect root to website UI kit
  if (reqUrl === '/' || reqUrl === '') {
    res.writeHead(302, { Location: '/ui_kits/website/index.html' });
    res.end();
    return;
  }

  let safePath = path.normalize(decodeURIComponent(reqUrl)).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + reqUrl);
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
