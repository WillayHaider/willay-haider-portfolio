import sharp from 'sharp';
import fs from 'fs';

async function generateHubspotWaterfall() {
  const svg = `
  <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#080d1a"/>
        <stop offset="50%" stop-color="#0f172a"/>
        <stop offset="100%" stop-color="#050811"/>
      </linearGradient>
      <linearGradient id="hubspotGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ff7a59"/>
        <stop offset="100%" stop-color="#ff5c35"/>
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#2dd4bf"/>
        <stop offset="100%" stop-color="#0f766e"/>
      </linearGradient>
      <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <!-- Background -->
    <rect width="1200" height="675" fill="url(#bg)"/>

    <!-- Subtle Grid Lines -->
    <g stroke="#1e293b" stroke-width="1" opacity="0.6">
      <line x1="80" y1="180" x2="1120" y2="180"/>
      <line x1="80" y1="260" x2="1120" y2="260"/>
      <line x1="80" y1="340" x2="1120" y2="340"/>
      <line x1="80" y1="420" x2="1120" y2="420"/>
      <line x1="80" y1="500" x2="1120" y2="500"/>
    </g>

    <!-- Top Badge -->
    <rect x="80" y="45" width="180" height="28" rx="14" fill="#ff7a59" fill-opacity="0.15" stroke="#ff7a59" stroke-width="1.5"/>
    <text x="170" y="64" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#ff7a59" text-anchor="middle">HUBSPOT CRM REVOPS</text>

    <!-- Title & Subtitle -->
    <text x="80" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="800" fill="#f8fafc">HubSpot Deal Pipeline &amp; Revenue Waterfall</text>
    <text x="80" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="400" fill="#94a3b8">Stage conversion velocity, drop-off analysis, and closed-won pipeline progression</text>

    <!-- Waterfall Columns -->
    <!-- Col 1: Total Leads Enrolled -->
    <g>
      <rect x="110" y="190" width="160" height="310" rx="8" fill="url(#hubspotGrad)" filter="url(#glow)"/>
      <text x="190" y="235" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">1,450</text>
      <text x="190" y="260" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#fed7aa" text-anchor="middle">Leads Enrolled</text>
      <text x="190" y="480" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">100% Base</text>
    </g>

    <!-- Col 2: Qualified MQL/SQL -->
    <g>
      <rect x="315" y="280" width="160" height="220" rx="8" fill="#f97316"/>
      <text x="395" y="325" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">480</text>
      <text x="395" y="350" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ffedd5" text-anchor="middle">MQL / SQL</text>
      <text x="395" y="480" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">33.1% Conversion</text>
    </g>

    <!-- Col 3: Demos Completed -->
    <g>
      <rect x="520" y="340" width="160" height="160" rx="8" fill="url(#tealGrad)"/>
      <text x="600" y="385" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#ffffff" text-anchor="middle">165</text>
      <text x="600" y="410" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#ccfbf1" text-anchor="middle">Demos Completed</text>
      <text x="600" y="480" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">34.4% of SQLs</text>
    </g>

    <!-- Col 4: Proposals Sent -->
    <g>
      <rect x="725" y="390" width="160" height="110" rx="8" fill="#0284c7"/>
      <text x="805" y="430" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle">62</text>
      <text x="805" y="452" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#e0f2fe" text-anchor="middle">Proposals Sent</text>
      <text x="805" y="485" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">37.6% of Demos</text>
    </g>

    <!-- Col 5: Closed Won -->
    <g>
      <rect x="930" y="420" width="160" height="80" rx="8" fill="url(#emeraldGrad)" filter="url(#glow)"/>
      <text x="1010" y="455" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#ffffff" text-anchor="middle">28 Deals</text>
      <text x="1010" y="475" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#d1fae5" text-anchor="middle">Closed Won ($385k)</text>
      <text x="1010" y="492" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff" text-anchor="middle">45.2% Win Rate</text>
    </g>

    <!-- Bottom Stat Pill Cards -->
    <g transform="translate(80, 545)">
      <!-- Card 1 -->
      <rect x="0" y="0" width="320" height="80" rx="10" fill="#1e293b" fill-opacity="0.6" stroke="#334155"/>
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">AVG OUTBOUND SALES CYCLE</text>
      <text x="20" y="62" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#38bdf8">24 Days <tspan font-size="12" font-weight="500" fill="#64748b">(Demo to Close)</tspan></text>

      <!-- Card 2 -->
      <rect x="360" y="0" width="320" height="80" rx="10" fill="#1e293b" fill-opacity="0.6" stroke="#334155"/>
      <text x="380" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">PIPELINE VELOCITY</text>
      <text x="380" y="62" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#34d399">$16,040 / Day</text>

      <!-- Card 3 -->
      <rect x="720" y="0" width="320" height="80" rx="10" fill="#1e293b" fill-opacity="0.6" stroke="#334155"/>
      <text x="740" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#94a3b8">CLOSED WON ACV</text>
      <text x="740" y="62" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#fb923c">$13,750 <tspan font-size="12" font-weight="500" fill="#64748b">per contract</tspan></text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile('public/hubspot-sales-analytics-waterfall.jpg');
  console.log('Generated public/hubspot-sales-analytics-waterfall.jpg');
}

async function generateVocalTonalityDiagram() {
  const svg = `
  <svg width="1200" height="675" viewBox="0 0 1200 675" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#090d16"/>
        <stop offset="50%" stop-color="#111827"/>
        <stop offset="100%" stop-color="#030712"/>
      </linearGradient>
      <linearGradient id="redWave" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ef4444"/>
        <stop offset="100%" stop-color="#f97316"/>
      </linearGradient>
      <linearGradient id="greenWave" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#10b981"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="1200" height="675" fill="url(#bg2)"/>

    <!-- Top Badge -->
    <rect x="80" y="45" width="220" height="28" rx="14" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="190" y="64" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#38bdf8" text-anchor="middle">PSYCHOLOGICAL SALES ACOUSTICS</text>

    <!-- Header -->
    <text x="80" y="110" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#f8fafc">Vocal Tonality Dynamics &amp; Objection Control</text>
    <text x="80" y="140" font-family="system-ui, sans-serif" font-size="15" font-weight="400" fill="#94a3b8">How vocal cadence and tone modulation bypass automatic defense mechanisms in B2B cold calling</text>

    <!-- Two Comparison Cards -->
    <!-- Left: Flawed Pitch Tone -->
    <g transform="translate(80, 175)">
      <rect x="0" y="0" width="500" height="260" rx="14" fill="#1e1b2e" stroke="#ef4444" stroke-width="1.5"/>
      <rect x="20" y="20" width="130" height="24" rx="6" fill="#ef4444" fill-opacity="0.2"/>
      <text x="85" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fca5a5" text-anchor="middle">HIGH RESISTANCE</text>

      <text x="20" y="75" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#fca5a5">Rushed Pitch Tonality (180+ WPM)</text>

      <!-- Waveform graphic representation -->
      <path d="M 20 120 Q 50 80, 80 120 T 140 120 T 200 70 T 260 140 T 320 60 T 380 130 T 440 70 L 480 120" fill="none" stroke="url(#redWave)" stroke-width="3"/>

      <!-- Bullet points -->
      <text x="20" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Rising inflection at the end of statements (sounds uncertain)</text>
      <text x="20" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Rushing to prevent interruption (signals low peer status)</text>
      <text x="20" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Prospect response: Reflex objection ("Not interested / Send email")</text>
    </g>

    <!-- Right: Peer-Level Diagnostic Tone -->
    <g transform="translate(620, 175)">
      <rect x="0" y="0" width="500" height="260" rx="14" fill="#0f2922" stroke="#10b981" stroke-width="1.5"/>
      <rect x="20" y="20" width="130" height="24" rx="6" fill="#10b981" fill-opacity="0.2"/>
      <text x="85" y="36" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#6ee7b7" text-anchor="middle">PEER-LEVEL STATUS</text>

      <text x="20" y="75" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#6ee7b7">Calm Diagnostic Tonality (130-140 WPM)</text>

      <!-- Smooth controlled wave -->
      <path d="M 20 120 Q 70 100, 120 120 T 220 120 T 320 110 T 420 120 L 480 120" fill="none" stroke="url(#greenWave)" stroke-width="3.5"/>

      <!-- Bullet points -->
      <text x="20" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Downward inflection on statements (signals authority &amp; calm)</text>
      <text x="20" y="195" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Deliberate 1-second pause after name drop (creates curiosity)</text>
      <text x="20" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="500" fill="#e2e8f0">• Prospect response: Engaged listening ("What is this regarding?")</text>
    </g>

    <!-- Bottom 3-Step Objection Handling Architecture -->
    <g transform="translate(80, 465)">
      <rect x="0" y="0" width="1040" height="155" rx="14" fill="#111827" stroke="#374151" stroke-width="1"/>
      <text x="30" y="35" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#f8fafc">3-STEP OBJECTION DEFUSION FRAMEWORK</text>

      <!-- Step 1 -->
      <g transform="translate(30, 55)">
        <circle cx="16" cy="16" r="16" fill="#38bdf8" fill-opacity="0.2"/>
        <text x="16" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#38bdf8" text-anchor="middle">1</text>
        <text x="45" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#f8fafc">Acknowledge &amp; Validate</text>
        <text x="45" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="400" fill="#94a3b8">"Totally fair Greg, I caught you in the middle of your morning."</text>
      </g>

      <!-- Step 2 -->
      <g transform="translate(370, 55)">
        <circle cx="16" cy="16" r="16" fill="#fb923c" fill-opacity="0.2"/>
        <text x="16" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#fb923c" text-anchor="middle">2</text>
        <text x="45" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#f8fafc">Clarify Context</text>
        <text x="45" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="400" fill="#94a3b8">"Are you handling outbound internally or using external teams?"</text>
      </g>

      <!-- Step 3 -->
      <g transform="translate(710, 55)">
        <circle cx="16" cy="16" r="16" fill="#34d399" fill-opacity="0.2"/>
        <text x="16" y="22" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#34d399" text-anchor="middle">3</text>
        <text x="45" y="15" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#f8fafc">Low-Pressure Reframe</text>
        <text x="45" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="400" fill="#94a3b8">"No problem at all. If I send 3 bullet points, can you take a look?"</text>
      </g>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(svg))
    .png({ quality: 90 })
    .toFile('public/vocal-tonality-and-objection-handling-diagram.png');
  console.log('Generated public/vocal-tonality-and-objection-handling-diagram.png');
}

async function run() {
  await generateHubspotWaterfall();
  await generateVocalTonalityDiagram();
}

run();
