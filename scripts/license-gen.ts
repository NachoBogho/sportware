// This file generates license keys for the SportWare application.

import { randomBytes, createHmac } from 'crypto';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

/**
 * Genera una clave de licencia:
 *  - 24 caracteres hex aleatorios (12 bytes) en mayúsculas
 *  - Firma HMAC-SHA256 truncada a 16 caracteres
 * Usa LICENSE_SECRET (o LOCAL_DEV_SECRET por defecto)
 * Guarda la clave en generated/license.txt
 */
function generateLicense(): string {
  const secret = process.env.LICENSE_SECRET || 'LOCAL_DEV_SECRET';
  const raw = randomBytes(12).toString('hex').toUpperCase();
  const sig = createHmac('sha256', secret).update(raw).digest('hex').slice(0, 16).toUpperCase();
  return `${raw}-${sig}`;
}

(function main() {
  const license = generateLicense();
  const outDir = path.resolve('generated');
  if (!existsSync(outDir)) mkdirSync(outDir);
  const filePath = path.join(outDir, 'license.txt');
  writeFileSync(filePath, license, 'utf8');
  console.log('Generated license key:', license);
  console.log('Saved at:', filePath);
  console.log('Usa esta clave para activar la aplicación.');
})();