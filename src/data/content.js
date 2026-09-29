/*
 * Course content for Access Ready.
 * Lessons are trusted, static HTML strings authored here (rendered with
 * dangerouslySetInnerHTML). Quiz items use Q(prompt, options, answerIndex, why).
 */
export const Q = (p, o, a, w) => ({ p, o, a, w });
export const R = {
  mdn: ['MDN: Accessibility', 'https://developer.mozilla.org/en-US/docs/Web/Accessibility'],
  edx: ['W3C Introduction to Web Accessibility (edX)', 'https://www.edx.org/learn/web-accessibility/the-world-wide-web-consortium-w3c-introduction-to-web-accessibility'],
  tt: ['DHS Section 508 Trusted Tester', 'https://www.dhs.gov/trusted-tester'],
  eaaCourse: ['Recite Me: EAA course', 'https://reciteme.com/product/accessibility-training/eaa-course/'],
  eaaCheck: ['Recite Me: EAA compliance checklist', 'https://reciteme.com/download/eaa-compliance-checklist/'],
  eaaGuide: ['Recite Me: EAA compliance guide', 'https://reciteme.com/download/eaa-compliance-guide/'],
  ae: ['AudioEye courses', 'https://www.audioeye.com/courses/'],
  apg: ['W3C ARIA Authoring Practices Guide', 'https://www.w3.org/WAI/ARIA/apg/'],
  deque: ['Deque University: screen reader shortcuts', 'https://dequeuniversity.com/screenreaders/'],
  wcag: ['WCAG 2.2 Quick Reference', 'https://www.w3.org/WAI/WCAG22/quickref/'],
  understanding: ['Understanding WCAG 2.2', 'https://www.w3.org/WAI/WCAG22/Understanding/'],
  iaap: ['IAAP certifications', 'https://www.accessibilityassociation.org/'],
  adaTitle2: ['ADA.gov: Title II web and mobile rule', 'https://www.ada.gov/resources/2024-03-08-web-rule/'],
  s508: ['Section508.gov', 'https://www.section508.gov/'],
  howPeople: ['W3C: How people with disabilities use the web', 'https://www.w3.org/WAI/people-use-web/'],
  coga: ['W3C: Making content usable (COGA)', 'https://www.w3.org/TR/coga-usable/'],
  wcagem: ['W3C: WCAG-EM evaluation methodology', 'https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/'],
  vpat: ['ITI VPAT', 'https://www.itic.org/policy/accessibility/vpat'],
  pdfua: ['PDF Association: PDF/UA', 'https://pdfa.org/resource/pdfua-in-a-nutshell/'],
  msAcc: ['Microsoft: Make your Office documents accessible', 'https://support.microsoft.com/en-us/office/make-your-word-documents-accessible-to-people-with-disabilities-d9bf3683-87ac-47ea-b91a-78dcacb3c66d'],
  daisy: ['DAISY Ace EPUB checker', 'https://daisy.github.io/ace/'],
  andi: ['ANDI accessibility testing tool', 'https://www.ssa.gov/accessibility/andi/help/install.html'],
};

export const MODULES = [
/* ------------------------------------------------------------------ */
{ id:'foundations', title:'Foundations', exams:['CPACC'],
  blurb:'Disability, assistive technology, models of disability, universal design and the laws that drive the work.',
  sections:[
  { id:'disabilities', title:'Disabilities & Functional Needs', exams:['CPACC'], sc:['1.3.3 A'],
    lede:'Accessibility starts with knowing who you are designing for and what gets in their way.',
    lesson:`
<p>The World Health Organization estimates that about 1.3 billion people, roughly 16% of the world's population, experience significant disability. Disability is not one experience. The CPACC exam expects you to know the main categories, the barriers each one meets online, and how people work around them.</p>
<h3>Main categories</h3>
<ul>
<li><b>Visual:</b> blindness, low vision (glaucoma, macular degeneration, diabetic retinopathy, retinitis pigmentosa, cataracts) and color vision deficiency (protanopia, deuteranopia, tritanopia, achromatopsia).</li>
<li><b>Auditory:</b> Deaf (capital D often signals a cultural and linguistic identity built around sign language), deaf, and hard of hearing. Deafblind people may use braille and tactile sign.</li>
<li><b>Physical and motor:</b> spinal cord injury, cerebral palsy, muscular dystrophy, arthritis, tremor, limb difference, repetitive strain injury.</li>
<li><b>Cognitive, learning and neurological:</b> intellectual disability, dyslexia, dyscalculia, ADHD, autism, memory loss, dementia, acquired brain injury, aphasia.</li>
<li><b>Seizure and vestibular:</b> photosensitive epilepsy, and vestibular disorders triggered by motion.</li>
<li><b>Speech</b> and <b>psychosocial</b> disabilities (anxiety, depression, PTSD).</li>
</ul>
<h3>Permanent, temporary, situational</h3>
<p>Microsoft's Inclusive Design persona spectrum shows the same need across contexts: one arm (permanent), an arm injury (temporary), a new parent holding a baby (situational). Designing for the permanent case helps everyone on the spectrum.</p>
<h3>Aging and multiple disabilities</h3>
<p>Disability prevalence rises with age, and many older adults have several mild impairments at once (vision, hearing, dexterity, memory) without identifying as disabled.</p>`,
    tip:'Expect scenario questions: "A user with X has trouble with Y. Which barrier is most likely?" Map the condition to its functional impact, not its medical name.',
    examples:[{ title:'Instructions that rely on senses', lang:'HTML',
      wrong:`<p>Click the green button on the right to continue.</p>`,
      wrongWhy:'Relies on color and position. Screen reader users and people with color vision deficiency cannot find it (1.3.3 Sensory Characteristics, 1.4.1).',
      right:`<p>Select <strong>Continue to payment</strong> to go on.</p>
<button type="submit">Continue to payment</button>`,
      rightWhy:'Names the control by its visible text, which works for every sense and every input method.'}],
    quiz:[
      Q('A person with one arm, a person with a broken wrist and a parent carrying a toddler all need one-handed interaction. This illustrates:',
        ['The medical model of disability','The persona spectrum: permanent, temporary and situational','The charity model of disability','Reasonable accommodation under ADA Title I'],1,
        'Microsoft\'s persona spectrum groups permanent, temporary and situational limitations that share one functional need.'),
      Q('Which of these is a learning disability that primarily affects reading?',
        ['Macular degeneration','Tinnitus','Dyslexia','Essential tremor'],2,
        'Dyslexia affects decoding and reading fluency. Macular degeneration is visual, tinnitus is auditory, and essential tremor is motor.'),
      Q('Why might captions written in complex English still be a barrier for some Deaf users?',
        ['Captions cannot be read on mobile devices','Sign language may be their first language, so written English is a second language','Deaf users cannot perceive text','Captions are only required for live media'],1,
        'For many Deaf people a sign language is the first language. Plain language and sign language interpretation (1.2.6, AAA) help.')
    ], refs:[R.howPeople, R.edx, R.ae]},

  { id:'assistive-tech', title:'Assistive Technologies', exams:['CPACC','WAS'], sc:['2.5.3 A'],
    lede:'The tools people use to perceive and operate technology, and what they need from your code.',
    lesson:`
<p>Assistive technology (AT) is any hardware or software that increases the functional capability of a person with a disability. Your markup is the interface AT reads, so knowing how each tool works tells you what your code must expose.</p>
<h3>Vision</h3>
<ul>
<li><b>Screen readers</b> convert the accessibility tree to speech or braille: JAWS and NVDA (Windows), Narrator, VoiceOver (macOS, iOS), TalkBack (Android).</li>
<li><b>Refreshable braille displays</b> raise pins to form braille cells from on-screen text.</li>
<li><b>Screen magnifiers</b> such as ZoomText, Fusion, Windows Magnifier and macOS Zoom. Magnifier users see a small part of the screen, so content placed far from its context gets missed.</li>
</ul>
<h3>Hearing</h3>
<ul><li>Captions, CART (Communication Access Realtime Translation), sign language interpreters, assistive listening systems and hearing loops, video relay services.</li></ul>
<h3>Motor</h3>
<ul>
<li>Keyboard-only use, switch access (single or dual switches, sip-and-puff) with scanning, head pointers, mouth sticks, eye gaze trackers, alternative keyboards.</li>
<li><b>Speech recognition</b> such as Dragon, Apple Voice Control and Android Voice Access. Users speak the visible label of a control, which is why the accessible name must contain the visible text (2.5.3 Label in Name).</li>
</ul>
<h3>Cognition and speech</h3>
<ul><li>Text-to-speech readers, word prediction, reading rulers, simplified interfaces, and AAC (augmentative and alternative communication) devices.</li></ul>`,
    tip:'Know which input each AT produces. Switch and voice users rely on the same things keyboard users need: focusable controls with clear names.',
    examples:[{ title:'Label in Name for voice users', lang:'HTML',
      wrong:`<button aria-label="Submit application form">Send</button>`,
      wrongWhy:'A voice user says "click Send", but the accessible name is "Submit application form", so nothing matches.',
      right:`<button>Send</button>
<!-- or, if more context is needed: -->
<button aria-label="Send application">Send</button>`,
      rightWhy:'The accessible name starts with the visible label, so spoken commands work (2.5.3).'}],
    quiz:[
      Q('A sip-and-puff device is best described as:',
        ['A braille input keyboard','A switch input operated by breath','An eye-tracking camera','A hearing loop receiver'],1,
        'Sip-and-puff sends switch signals when the user inhales or exhales into a tube, often combined with scanning.'),
      Q('What does CART stand for?',
        ['Computer Assisted Reading Tool','Communication Access Realtime Translation','Captioned Audio Relay Transcript','Closed Audio Real-Time'],1,
        'CART is live, human-produced captioning, often used in meetings, classes and events.'),
      Q('A speech recognition user says "click Search" but the button does not respond. The most likely cause is:',
        ['The button has a visible focus indicator','The accessible name does not include the visible word "Search"','The button uses a <button> element','The page has a skip link'],1,
        'SC 2.5.3 Label in Name requires the accessible name to contain the visible label text.')
    ], refs:[R.howPeople, R.deque, R.mdn]},

  { id:'models', title:'Models of Disability', exams:['CPACC'], sc:[],
    lede:'The frameworks that shape how laws, organizations and people think about disability.',
    lesson:`
<p>Models of disability explain where disability comes from and who is responsible for removing barriers. CPACC tests these heavily because they explain the reasoning behind laws and policy.</p>
<ul>
<li><b>Medical model:</b> disability is a problem inside the person, to be diagnosed, treated or cured by professionals.</li>
<li><b>Social model:</b> disability is created by barriers in society (inaccessible buildings, websites, attitudes). Remove the barrier and the disability is reduced. This model drives most accessibility work.</li>
<li><b>Charity (tragedy) model:</b> disabled people are objects of pity who depend on the generosity of others.</li>
<li><b>Economic model:</b> disability is defined by a person's ability to work and contribute economically. It shapes benefit and employment policy.</li>
<li><b>Functional model:</b> focuses on functional limitations and the adjustments that address them.</li>
<li><b>Biopsychosocial model:</b> combines biological, psychological and social factors. The WHO's International Classification of Functioning, Disability and Health (ICF, 2001) is built on it.</li>
<li><b>Human rights model:</b> disabled people hold the same rights as everyone else, and states must protect them. The UN Convention on the Rights of Persons with Disabilities (CRPD, 2006) is the key text.</li>
<li><b>Identity or affirmation model:</b> disability is a positive part of identity and culture (for example, Deaf culture).</li>
</ul>`,
    tip:'Read the verbs in the question. "Cure" or "treat" points to medical; "barriers" points to social; "rights" and "state obligations" point to human rights.',
    examples:[{ title:'Framing in product copy', lang:'Copy',
      wrong:`Our app helps people who suffer from
blindness overcome their tragedy.`,
      wrongWhy:'Charity and tragedy framing. It positions the user as a victim rather than a customer.',
      right:`Our app works with VoiceOver and TalkBack,
so blind and low-vision customers can
manage their accounts independently.`,
      rightWhy:'Social model framing: the product removes a barrier and names the concrete support.'}],
    quiz:[
      Q('Which model says disability results mainly from barriers in the environment and society?',
        ['Medical model','Social model','Charity model','Economic model'],1,
        'The social model locates disability in barriers, not in the person.'),
      Q('The WHO ICF framework is most closely associated with which model?',
        ['Biopsychosocial model','Charity model','Medical model only','Identity model'],0,
        'The ICF combines body functions, activities, participation and environmental factors: a biopsychosocial approach.'),
      Q('The UN Convention on the Rights of Persons with Disabilities best reflects which model?',
        ['Economic model','Charity model','Human rights model','Functional model'],2,
        'The CRPD frames accessibility as a right that states must protect (see Article 9, Accessibility).')
    ], refs:[R.edx, R.iaap]},

  { id:'universal-design', title:'Universal & Inclusive Design', exams:['CPACC'], sc:['3.3.4 AA'],
    lede:'Design once for the widest range of people, instead of retrofitting later.',
    lesson:`
<p>Universal Design (UD) was defined by architect Ronald Mace and the Center for Universal Design at North Carolina State University. Its seven principles (1997) appear on the CPACC exam by name.</p>
<ol>
<li><b>Equitable use</b>: useful to people with diverse abilities, with the same means of use where possible.</li>
<li><b>Flexibility in use</b>: accommodates a range of preferences and abilities.</li>
<li><b>Simple and intuitive use</b>: easy to understand regardless of experience or language.</li>
<li><b>Perceptible information</b>: communicates effectively regardless of sensory abilities.</li>
<li><b>Tolerance for error</b>: minimizes hazards and consequences of accidental actions.</li>
<li><b>Low physical effort</b>: efficient and comfortable, with minimal fatigue.</li>
<li><b>Size and space for approach and use</b>.</li>
</ol>
<h3>Universal Design for Learning (UDL)</h3>
<p>CAST's UDL framework applies the idea to education with three principles: multiple means of <b>engagement</b>, <b>representation</b>, and <b>action and expression</b>.</p>
<h3>Inclusive design</h3>
<p>Microsoft's inclusive design principles: recognize exclusion, learn from diversity, solve for one and extend to many. The <b>curb-cut effect</b> describes features built for disabled people that help everyone: curb cuts help strollers, captions help people in noisy bars.</p>
<h3>Accessibility, usability, inclusion</h3>
<p>Accessibility removes barriers for disabled people. Usability is how effective and satisfying a product is. Inclusion is about diversity and participation more broadly. They overlap, but a product can be usable for most people and still inaccessible.</p>`,
    tip:'"Aesthetic" and "affordable" are not UD principles. Distractors often use them.',
    examples:[{ title:'Tolerance for error in a form', lang:'HTML',
      wrong:`<form onsubmit="return validate()">
  <!-- validate() clears every field on error -->
  <input name="email">
  <button>Delete my account</button>
</form>`,
      wrongWhy:'Errors wipe the user\'s input and a destructive action happens in one click with no confirmation.',
      right:`<form>
  <p id="warn">Deleting your account removes all saved data.</p>
  <label><input type="checkbox" required aria-describedby="warn">
    I understand this cannot be undone</label>
  <button>Delete my account</button>
</form>`,
      rightWhy:'Explains the consequence and asks for confirmation, matching UD principle 5 and WCAG 3.3.4 Error Prevention.'}],
    quiz:[
      Q('Offering "Undo" and confirming destructive actions maps most directly to which Universal Design principle?',
        ['Equitable use','Tolerance for error','Size and space for approach and use','Low physical effort'],1,
        'Tolerance for error minimizes the consequences of accidental or unintended actions.'),
      Q('Which is one of the three principles of Universal Design for Learning?',
        ['Multiple means of representation','Multiple means of monetization','Single means of assessment','Aesthetic appeal'],0,
        'UDL principles: engagement, representation, and action and expression.'),
      Q('Captions used by people watching video in a noisy airport are an example of:',
        ['The medical model','The curb-cut effect','An undue burden','A situational trap'],1,
        'A feature designed for disabled people ends up benefiting many others.')
    ], refs:[R.edx, R.howPeople]},

  { id:'laws', title:'Laws, Policies & Standards', exams:['CPACC','WAS'], sc:[],
    lede:'The legal and technical framework: who must comply, with what, and by when.',
    lesson:`
<h3>United States</h3>
<ul>
<li><b>Americans with Disabilities Act (ADA, 1990):</b> Title I employment, Title II state and local government, Title III public accommodations (businesses open to the public), Title IV telecommunications (including relay services).</li>
<li><b>ADA Title II web rule (DOJ, April 2024):</b> state and local governments must meet WCAG 2.1 Level AA for web content and mobile apps. An April 2026 interim final rule moved compliance to <b>April 26, 2027</b> for entities serving 50,000 or more people and <b>April 26, 2028</b> for smaller entities and special districts.</li>
<li><b>Section 508 of the Rehabilitation Act:</b> federal agencies must make the ICT they develop, buy, maintain or use accessible. The 2017 refresh (effective January 2018) incorporates <b>WCAG 2.0 Level A and AA</b>. Section 504 prohibits discrimination in federally funded programs.</li>
<li><b>Section 255</b> (Telecommunications Act) and the <b>CVAA</b> (21st Century Communications and Video Accessibility Act, 2010) cover telecom, advanced communications and video programming.</li>
</ul>
<h3>International</h3>
<ul>
<li><b>UN CRPD (2006):</b> Article 9 sets accessibility obligations for signatory states.</li>
<li><b>European Union:</b> the Web Accessibility Directive (2016/2102) covers public sector sites and apps. The European Accessibility Act (Directive 2019/882) covers private products and services from 28 June 2025. Both rely on the harmonised standard <b>EN 301 549</b>.</li>
<li><b>Canada:</b> Accessible Canada Act (2019, federal) and Ontario's AODA (2005).</li>
<li><b>UK:</b> Equality Act 2010 and the Public Sector Bodies Accessibility Regulations 2018. Also: Australia's Disability Discrimination Act 1992, Japan's JIS X 8341-3, Israel's IS 5568.</li>
<li><b>Marrakesh Treaty (2013):</b> cross-border sharing of accessible-format books for people with print disabilities.</li>
</ul>
<h3>W3C standards</h3>
<ul>
<li><b>WCAG 2.0</b> (2008, also ISO/IEC 40500:2012), <b>2.1</b> (2018), <b>2.2</b> (October 2023). WCAG 3 is still a working draft.</li>
<li><b>ATAG 2.0</b> for authoring tools, <b>UAAG 2.0</b> for user agents, <b>WAI-ARIA 1.2</b> for rich internet applications.</li>
<li>For documents: <b>PDF/UA</b> (ISO 14289) and the <b>EPUB Accessibility</b> specification.</li>
</ul>`,
    tip:'Know the pairings: Section 508 = WCAG 2.0 AA, ADA Title II rule = WCAG 2.1 AA, EN 301 549 = the EU\'s harmonised standard.',
    examples:[{ title:'Accessibility statement', lang:'Copy',
      wrong:`This website is 100% accessible
and fully ADA compliant.`,
      wrongWhy:'An unverifiable claim with no standard, no date, no known issues and no way to get help.',
      right:`We aim to conform to WCAG 2.2 Level AA.
Last reviewed: 15 September 2026.
Known issues: older PDF reports (before 2024)
are not fully tagged. Request an accessible
copy at access@example.org or 555-0100.
We reply within 2 business days.`,
      rightWhy:'States the target standard, review date, known limitations, alternatives and a response time.'}],
    quiz:[
      Q('Which ADA title covers state and local government services, including their websites?',
        ['Title I','Title II','Title III','Title IV'],1,
        'Title II covers public entities. Title III covers public accommodations.'),
      Q('The Revised Section 508 Standards incorporate which WCAG version and level?',
        ['WCAG 2.2 Level AA','WCAG 2.1 Level AA','WCAG 2.0 Level A and AA','WCAG 2.0 Level AAA'],2,
        'The 2017 refresh adopted WCAG 2.0 Level A and AA by reference.'),
      Q('From what date do the European Accessibility Act requirements apply?',
        ['1 January 2024','28 June 2025','23 September 2020','26 April 2027'],1,
        'EU Member States had to apply the EAA measures from 28 June 2025.')
    ], refs:[R.adaTitle2, R.s508, R.eaaGuide, R.wcag]},
  ]},
/* ------------------------------------------------------------------ */
{ id:'web', title:'Web Development', exams:['WAS'],
  blurb:'WCAG 2.2 in practice: semantics, ARIA, keyboard, forms, media, color and responsive design.',
  sections:[
  { id:'wcag', title:'WCAG 2.2: POUR & Conformance', exams:['WAS','CPACC'], sc:['3.1.1 A'],
    lede:'How the standard is organized, and what it takes to claim conformance.',
    lesson:`
<p>WCAG 2.2 is organized in layers: <b>4 principles</b>, <b>13 guidelines</b>, <b>86 success criteria</b> (SC), plus sufficient techniques, advisory techniques and documented failures.</p>
<h3>POUR</h3>
<ul>
<li><b>Perceivable:</b> text alternatives, media alternatives, adaptable structure, distinguishable content.</li>
<li><b>Operable:</b> keyboard, enough time, seizures and physical reactions, navigable, input modalities.</li>
<li><b>Understandable:</b> readable, predictable, input assistance.</li>
<li><b>Robust:</b> compatible with current and future user agents, including AT.</li>
</ul>
<h3>Levels and conformance</h3>
<p>Each SC is Level A, AA or AAA. Most laws require AA, which means meeting every A and AA criterion. The five conformance requirements are: the level, <b>full pages</b>, <b>complete processes</b> (every page in a checkout must conform), <b>only accessibility-supported ways of using technologies</b>, and <b>non-interference</b> (non-conforming technology must not block the rest of the page).</p>
<h3>What changed in 2.2</h3>
<ul>
<li>New: 2.4.11 Focus Not Obscured (Minimum, AA), 2.4.12 Focus Not Obscured (Enhanced, AAA), 2.4.13 Focus Appearance (AAA), 2.5.7 Dragging Movements (AA), 2.5.8 Target Size (Minimum, AA), 3.2.6 Consistent Help (A), 3.3.7 Redundant Entry (A), 3.3.8 Accessible Authentication (Minimum, AA), 3.3.9 Accessible Authentication (Enhanced, AAA).</li>
<li>Removed: <b>4.1.1 Parsing</b>, now treated as obsolete.</li>
</ul>
<p>WCAG 2.2 is backward compatible: content that conforms to 2.2 also conforms to 2.1 and 2.0.</p>`,
    tip:'Learn SC numbers for the common ones (1.1.1, 1.3.1, 1.4.3, 2.1.1, 2.4.3, 2.4.7, 3.3.2, 4.1.2). WAS questions often cite them.',
    examples:[{ title:'Language of page', lang:'HTML',
      wrong:`<html>
  <head><title>Accueil</title></head>
  <body><p>Bienvenue sur notre site.</p></body>
</html>`,
      wrongWhy:'No lang attribute. A screen reader may read French text with English pronunciation (fails 3.1.1).',
      right:`<html lang="fr">
  <head><title>Accueil - Boulangerie Martin</title></head>
  <body>
    <p>Bienvenue sur notre site.</p>
    <p lang="en">Open Sunday for brunch.</p>
  </body>
</html>`,
      rightWhy:'Page language set (3.1.1 A) and the English passage marked (3.1.2 Language of Parts, AA).'}],
    quiz:[
      Q('What are the four principles of WCAG?',
        ['Perceivable, Operable, Understandable, Robust','Predictable, Open, Usable, Readable','Perceivable, Organized, Universal, Reliable','Programmatic, Operable, Usable, Responsive'],0,
        'POUR: Perceivable, Operable, Understandable, Robust.'),
      Q('Which success criterion was removed in WCAG 2.2?',
        ['1.1.1 Non-text Content','2.4.7 Focus Visible','4.1.1 Parsing','1.4.10 Reflow'],2,
        'Parsing was removed because modern browsers and AT handle markup errors consistently.'),
      Q('A checkout has five steps. Step 4 fails a Level A criterion. Under the "complete processes" requirement:',
        ['Only step 4 fails to conform','None of the pages in the process conform','The process conforms if steps 1 to 3 pass','It conforms if a phone number is listed'],1,
        'When a page is part of a process, conformance requires every page in the process to conform.')
    ], refs:[R.wcag, R.understanding, R.edx]},

  { id:'semantic-html', title:'Semantic HTML & Landmarks', exams:['WAS'], sc:['1.3.1 A','2.4.1 A','2.4.2 A','4.1.2 A'],
    lede:'Native elements give you roles, states, keyboard support and names for free.',
    lesson:`
<p>Browsers build an <b>accessibility tree</b> from your DOM. Each node has a role, a name, states and properties. Semantic HTML fills that tree correctly with no extra work.</p>
<h3>Landmarks</h3>
<ul>
<li><code>&lt;header&gt;</code> maps to <code>banner</code> when it is not inside <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code> or <code>&lt;section&gt;</code>.</li>
<li><code>&lt;nav&gt;</code> = navigation, <code>&lt;main&gt;</code> = main (one per page), <code>&lt;aside&gt;</code> = complementary, <code>&lt;footer&gt;</code> = contentinfo (same scoping rule as header).</li>
<li><code>&lt;section&gt;</code> becomes a <code>region</code> and <code>&lt;form&gt;</code> becomes a <code>form</code> landmark only when they have an accessible name.</li>
<li>When a landmark type repeats, give each one a unique name: <code>aria-label="Main"</code>, <code>aria-label="Footer"</code>.</li>
</ul>
<h3>Links or buttons</h3>
<p>Links go somewhere (a new URL or a fragment). Buttons do something (submit, open a dialog, toggle). A <code>&lt;button&gt;</code> is focusable and fires on Enter and Space; a <code>&lt;div&gt;</code> does none of that.</p>
<h3>Page-level basics</h3>
<ul>
<li>A descriptive, unique <code>&lt;title&gt;</code> (2.4.2 Page Titled).</li>
<li>A way to bypass repeated blocks, such as a skip link or landmarks (2.4.1 Bypass Blocks).</li>
<li>Structure conveyed visually must also be available programmatically (1.3.1 Info and Relationships).</li>
</ul>`,
    tip:'"No ARIA is better than bad ARIA." If the question offers a native element and an ARIA-heavy div, the native element is almost always right.',
    examples:[{ title:'Navigation', lang:'HTML',
      wrong:`<div class="nav">
  <div class="link" onclick="go('/')">Home</div>
  <div class="link" onclick="go('/pricing')">Pricing</div>
</div>`,
      wrongWhy:'No landmark, no link role, not focusable, not operable with a keyboard, no list structure.',
      right:`<nav aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/pricing">Pricing</a></li>
  </ul>
</nav>`,
      rightWhy:'Navigation landmark with a name, real links in a list, and aria-current marking the current page.'}],
    quiz:[
      Q('Which HTML element maps to the "main" landmark role?',
        ['<section>','<article>','<main>','<div id="main">'],2,
        '<main> maps to role="main". An id does not create a landmark.'),
      Q('A control opens a modal dialog without changing the URL. It should be:',
        ['<a href="#">','<button type="button">','<div onclick>','<span role="link">'],1,
        'It performs an action, so it is a button.'),
      Q('A page has two <nav> elements (main menu and footer links). Best practice is to:',
        ['Remove one of them','Give each a unique accessible name with aria-label or aria-labelledby','Add role="navigation" to both','Use tabindex="0" on each'],1,
        'Unique names let screen reader users tell repeated landmarks apart.')
    ], refs:[R.mdn, R.apg, R.understanding]},

  { id:'headings', title:'Headings, Lists & Reading Order', exams:['WAS','ADS'], sc:['1.3.1 A','1.3.2 A','2.4.6 AA','2.4.3 A'],
    lede:'Structure lets people skim a page the way sighted users do with their eyes.',
    lesson:`
<p>In WebAIM's screen reader user surveys, navigating by headings is consistently the most common way people find information on a long page. Headings are an outline, not a font size.</p>
<ul>
<li>Use <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> to reflect the real hierarchy. One <code>&lt;h1&gt;</code> naming the page is the common convention.</li>
<li>Do not skip levels to get a smaller font. Style with CSS instead.</li>
<li>Headings and labels must describe their topic or purpose (2.4.6, AA).</li>
<li>Use <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code> and <code>&lt;dl&gt;</code> for groups. Screen readers announce "list, 5 items", which tells users how much is coming.</li>
</ul>
<h3>Reading order and focus order</h3>
<p>The DOM order is the order AT reads and the order Tab follows. CSS that visually reorders content (flex <code>order</code>, grid placement, absolute positioning) can create a mismatch. That fails 1.3.2 Meaningful Sequence when meaning changes, and 2.4.3 Focus Order when focus jumps illogically.</p>`,
    tip:'The same rule applies in Word and PDF: use real heading styles and tags, not bold text. ADS asks this in document form.',
    examples:[{ title:'Visual headings', lang:'HTML',
      wrong:`<p class="big-bold">Shipping options</p>
<h4>Standard</h4>   <!-- chosen for its small size -->`,
      wrongWhy:'The first "heading" is a paragraph, and the next skips from nothing to level 4 for styling.',
      right:`<h2>Shipping options</h2>
<h3 class="subtle">Standard</h3>
<h3 class="subtle">Express</h3>`,
      rightWhy:'Levels follow the outline, and CSS handles the look.'}],
    quiz:[
      Q('A developer uses CSS flex "order" to move the sidebar above the article, but the DOM still has the article first. What can this cause?',
        ['A 1.4.3 contrast failure','A mismatch between visual and programmatic order (1.3.2 and 2.4.3)','A 3.1.1 language failure','Nothing, since CSS does not affect AT'],1,
        'Screen readers and Tab follow the DOM, not the visual order.'),
      Q('Text styled large and bold with a <div> to look like a heading fails which SC?',
        ['1.3.1 Info and Relationships','2.2.1 Timing Adjustable','1.4.2 Audio Control','2.5.1 Pointer Gestures'],0,
        'The visual structure is not conveyed programmatically.'),
      Q('In NVDA or JAWS browse mode, which key moves to the next heading?',
        ['T','H','L','Tab'],1,
        'H moves by heading. Number keys 1 to 6 move by heading level.')
    ], refs:[R.mdn, R.deque, R.understanding]},

  { id:'images', title:'Images & Text Alternatives', exams:['WAS','ADS','CPACC'], sc:['1.1.1 A','1.4.5 AA'],
    lede:'Every image has a job. Alt text describes the job, not the pixels.',
    lesson:`
<p>SC 1.1.1 Non-text Content requires a text alternative that serves the same purpose. Decide the image's purpose first.</p>
<ul>
<li><b>Informative:</b> convey the information in a short phrase or sentence.</li>
<li><b>Decorative:</b> use <code>alt=""</code> (empty, not missing) so screen readers skip it. A missing alt often makes AT read the file name.</li>
<li><b>Functional</b> (image inside a link or button): describe the action or destination, such as "Search" or "Acme home".</li>
<li><b>Images of text:</b> avoid them; use real text (1.4.5). Logos are exempt.</li>
<li><b>Complex</b> (charts, diagrams, maps): a short alt plus a longer description nearby, such as a data table or summary.</li>
<li><b>Groups:</b> when several images form one piece of information (a five-star rating), one alt covers the group.</li>
</ul>
<h3>Other rules</h3>
<ul>
<li>Do not start with "image of" or "picture of"; the screen reader already says "graphic".</li>
<li>CSS background images are invisible to AT. Do not put meaning in them.</li>
<li>Inline SVG: add <code>role="img"</code> and an accessible name (<code>&lt;title&gt;</code> or <code>aria-label</code>), or <code>aria-hidden="true"</code> when decorative.</li>
<li>CAPTCHA needs an alternative form (for example audio) and a text description of its purpose.</li>
</ul>`,
    tip:'The W3C alt decision tree is worth memorizing. For documents, "Mark as decorative" in Office does the same job as alt="".',
    examples:[{ title:'Functional and decorative images', lang:'HTML',
      wrong:`<a href="/"><img src="logo.png"></a>
<img src="divider.svg" alt="decorative divider line">
<button><img src="magnifier.svg" alt="magnifying glass"></button>`,
      wrongWhy:'The link has no name, the divider adds noise, and the button describes the picture instead of the action.',
      right:`<a href="/"><img src="logo.png" alt="Acme home"></a>
<img src="divider.svg" alt="">
<button><img src="magnifier.svg" alt="Search"></button>`,
      rightWhy:'Functional images name the destination or action; the decorative image is hidden with an empty alt.'}],
    quiz:[
      Q('An image of a magnifying glass is the only content of a search button. The alt text should be:',
        ['"Magnifying glass"','"Image of a magnifying glass icon"','"Search"','Empty (alt="")'],2,
        'Functional images describe the function, not the appearance.'),
      Q('A purely decorative flourish image should have:',
        ['No alt attribute','alt="" (empty)','alt="decorative"','A title attribute only'],1,
        'An empty alt tells AT to ignore it. A missing alt may cause the file name to be read.'),
      Q('The best way to make a detailed bar chart accessible is:',
        ['A 300-word alt attribute','A short alt identifying the chart plus a data table or long description','alt="chart"','Converting the chart to a background image'],1,
        'Complex images need a brief alternative plus a full equivalent nearby.')
    ], refs:[['W3C: Alt decision tree','https://www.w3.org/WAI/tutorials/images/decision-tree/'], R.mdn, R.ae]},

  { id:'forms', title:'Forms, Labels & Errors', exams:['WAS'], sc:['1.3.5 AA','3.3.1 A','3.3.2 A','3.3.3 AA','3.3.7 A','3.3.8 AA'],
    lede:'Forms are where users complete tasks, and where most accessibility failures block them.',
    lesson:`
<h3>Labels</h3>
<ul>
<li>Every control needs a programmatic label. Prefer <code>&lt;label for="id"&gt;</code> or wrapping the input in a label.</li>
<li>Placeholder text is not a label: it disappears on input, usually has low contrast, and support as a name is inconsistent.</li>
<li>Group related radio buttons and checkboxes with <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code>.</li>
<li>Connect hints and errors with <code>aria-describedby</code>.</li>
<li>Add <code>autocomplete</code> tokens (<code>name</code>, <code>email</code>, <code>street-address</code>) for fields about the user (1.3.5 Identify Input Purpose).</li>
</ul>
<h3>Errors</h3>
<ul>
<li>3.3.1 Error Identification: describe the error in text and identify the field.</li>
<li>3.3.3 Error Suggestion: say how to fix it when you know how.</li>
<li>3.3.4 Error Prevention (legal, financial, data): allow review, correction or reversal.</li>
<li>Set <code>aria-invalid="true"</code> on failing fields, and on submit either move focus to an error summary with links to each field or to the first invalid field.</li>
</ul>
<h3>New in WCAG 2.2</h3>
<ul>
<li>3.3.7 Redundant Entry: do not make users re-enter information they already gave in the same process; auto-fill it or let them select it.</li>
<li>3.3.8 Accessible Authentication (Minimum): no cognitive function test (remembering, transcribing, solving) unless there is an alternative or help. Allowing paste and password managers satisfies it.</li>
</ul>`,
    tip:'Required fields need more than a red asterisk: use the required attribute and a visible text cue explained once at the top.',
    examples:[{ title:'Email field with an error', lang:'HTML',
      wrong:`<input type="text" placeholder="Email" class="error-border">
<!-- red border is the only error signal -->`,
      wrongWhy:'No label, the error is shown by color alone, and there is no text explaining what to fix.',
      right:`<label for="email">Email address (required)</label>
<input id="email" type="email" autocomplete="email" required
       aria-invalid="true" aria-describedby="email-err">
<p id="email-err" class="error">
  <svg aria-hidden="true">...</svg>
  Enter an email address like name@example.com
</p>`,
      rightWhy:'Persistent label, input purpose, a text error linked to the field, and an icon so color is not the only cue.'}],
    quiz:[
      Q('A form uses placeholder text as the only label for each field. The main problem is:',
        ['Placeholders are not allowed in HTML5','Placeholder text disappears on input and is not a reliable, persistent label','Placeholders always fail 1.4.3','Screen readers cannot read any placeholder'],1,
        'Labels must persist (3.3.2) and be programmatically associated (1.3.1, 4.1.2).'),
      Q('How should a group of radio buttons asking "Preferred contact method" be marked up?',
        ['A <div> with a bold heading','<fieldset> with a <legend> containing the question','A <table> with one row per option','Radio buttons each with aria-label only'],1,
        'The legend gives the group a name that is announced with each option.'),
      Q('Adding autocomplete="email" to an email field helps meet which SC?',
        ['1.3.5 Identify Input Purpose','2.4.4 Link Purpose','1.4.11 Non-text Contrast','2.1.4 Character Key Shortcuts'],0,
        'Programmatic input purpose lets browsers and AT auto-fill or add icons.')
    ], refs:[['W3C Forms tutorial','https://www.w3.org/WAI/tutorials/forms/'], R.mdn, R.understanding]},

  { id:'keyboard', title:'Keyboard & Focus Management', exams:['WAS'], sc:['2.1.1 A','2.1.2 A','2.4.3 A','2.4.7 AA','2.4.11 AA'],
    lede:'If it works with a mouse, it must work with a keyboard, and users must see where they are.',
    lesson:`
<ul>
<li><b>2.1.1 Keyboard:</b> all functionality must be operable with a keyboard (path-dependent input like freehand drawing is the exception).</li>
<li><b>2.1.2 No Keyboard Trap:</b> focus that moves into a component must be able to move out.</li>
<li><b>2.1.4 Character Key Shortcuts:</b> single-letter shortcuts must be able to be turned off, remapped, or only active on focus.</li>
<li><b>2.4.3 Focus Order:</b> focus moves in an order that preserves meaning.</li>
<li><b>2.4.7 Focus Visible (AA)</b> and <b>2.4.13 Focus Appearance (AAA)</b>: a visible indicator.</li>
<li><b>2.4.11 Focus Not Obscured (Minimum, AA):</b> the focused item must not be completely hidden by sticky headers, footers or cookie banners.</li>
<li><b>3.2.1 On Focus:</b> receiving focus must not trigger a change of context.</li>
</ul>
<h3>tabindex</h3>
<ul>
<li><code>tabindex="0"</code> adds an element to the natural tab order.</li>
<li><code>tabindex="-1"</code> makes it focusable by script only (headings you move focus to, dialog containers).</li>
<li>Positive values override the natural order and almost always create confusion. Avoid them.</li>
</ul>
<h3>Managing focus</h3>
<p>Move focus when the context changes: into a dialog when it opens, back to the trigger when it closes, to the new heading after a single-page route change. Use <code>inert</code> on content behind a modal. Never remove outlines without a replacement; style <code>:focus-visible</code> instead.</p>`,
    tip:'The keyboard test is the single fastest manual check: unplug the mouse, press Tab through the page, and try to complete the main task.',
    examples:[{ title:'A custom save control', lang:'HTML + CSS',
      wrong:`<div class="btn" onclick="save()">Save</div>

<style> *:focus { outline: none; } </style>`,
      wrongWhy:'Not focusable, no role, no Enter or Space support, and focus is invisible everywhere.',
      right:`<button type="button" onclick="save()">Save</button>

<style>
  button:focus-visible {
    outline: 3px solid #0B57A4;
    outline-offset: 3px;
  }
</style>`,
      rightWhy:'A native button gets focus, role and keyboard support; :focus-visible keeps a strong indicator for keyboard users.'}],
    quiz:[
      Q('Why is tabindex="3" on a link usually a problem?',
        ['It removes the link from the tab order','Positive tabindex values override the natural order and create a confusing sequence','It hides the link from screen readers','It fails 1.4.3 contrast'],1,
        'Positive values jump ahead of all tabindex="0" and native elements.'),
      Q('A sticky cookie banner completely covers the focused link as a user tabs down the page. Which WCAG 2.2 SC fails?',
        ['2.4.11 Focus Not Obscured (Minimum)','3.2.6 Consistent Help','1.4.12 Text Spacing','2.5.8 Target Size'],0,
        'At Level AA the focused component must not be entirely hidden by author-created content.'),
      Q('If you must build a button from a <div>, what is the minimum needed?',
        ['role="button" only','tabindex="0" only','role="button", tabindex="0", and key handlers for Enter and Space','aria-label only'],2,
        'You have to recreate the role, focusability and keyboard behavior a native button gives you.')
    ], refs:[R.mdn, R.apg, R.understanding]},

  { id:'color', title:'Color, Contrast & Use of Color', exams:['WAS','ADS','CPACC'], sc:['1.4.1 A','1.4.3 AA','1.4.6 AAA','1.4.11 AA'],
    lede:'Enough contrast to read, and never color alone to carry meaning.',
    lesson:`
<h3>Text contrast</h3>
<ul>
<li><b>1.4.3 Contrast (Minimum, AA):</b> 4.5:1 for normal text, 3:1 for large text.</li>
<li><b>Large text</b> means at least 18pt (24 CSS px) regular, or 14pt (about 18.66 CSS px) bold.</li>
<li><b>1.4.6 Contrast (Enhanced, AAA):</b> 7:1 normal, 4.5:1 large.</li>
<li>Exceptions: logos, disabled controls, and purely decorative or incidental text.</li>
</ul>
<h3>Non-text contrast (1.4.11, AA)</h3>
<p>3:1 against adjacent colors for the visual boundaries of UI components (input borders, checkboxes), their states (a selected tab), focus indicators, and graphics needed to understand content (chart lines, icons).</p>
<h3>Use of color (1.4.1, A)</h3>
<p>Color can be used, but never as the only way to convey information. Add text, icons, patterns or underlines. About 1 in 12 men and 1 in 200 women have a color vision deficiency; red-green types (protan and deutan) are the most common, while tritan (blue-yellow) and achromatopsia (no color) are rare.</p>
<p>Links inside a paragraph should be underlined, or have 3:1 contrast with surrounding text plus a non-color cue on hover and focus.</p>`,
    tip:'This app demonstrates it: correct answers use a solid border and a check icon, wrong ones a dashed border and an X, so meaning survives every theme, including Monochrome.',
    examples:[{ title:'Required fields and status', lang:'HTML + CSS',
      wrong:`<p>Fields in red are required.</p>
<label style="color:red">Phone</label>
<span style="color:#9AA0A6">Order shipped</span> <!-- 2.6:1 -->`,
      wrongWhy:'Required state is shown by color alone, and the grey status text fails 4.5:1.',
      right:`<p>Fields marked * are required.</p>
<label>Phone *</label>
<span class="status">
  <svg aria-hidden="true">...check...</svg> Order shipped
</span>
<style>.status { color:#1F5E2E; } /* 7.4:1 on white */</style>`,
      rightWhy:'A text symbol explained in words, an icon plus label for status, and dark enough text.'}],
    quiz:[
      Q('What is the minimum contrast ratio for normal-size body text at Level AA?',
        ['3:1','4.5:1','7:1','2.5:1'],1,
        '1.4.3 requires 4.5:1 for normal text and 3:1 for large text.'),
      Q('A text input\'s border must have what minimum contrast against the background to meet 1.4.11?',
        ['1.5:1','3:1','4.5:1','No requirement'],1,
        'Visual boundaries needed to identify a component need 3:1.'),
      Q('Under WCAG, "large text" is at least:',
        ['16px regular','18pt regular or 14pt bold','12pt bold','20px regular or 16px bold'],1,
        '18pt (24 CSS px) regular or 14pt (about 18.66 CSS px) bold.')
    ], refs:[['WebAIM contrast checker','https://webaim.org/resources/contrastchecker/'], R.understanding, R.mdn]},

  { id:'aria', title:'ARIA Fundamentals', exams:['WAS'], sc:['4.1.2 A','1.3.1 A'],
    lede:'ARIA changes what AT hears. It never changes what the browser does.',
    lesson:`
<p>WAI-ARIA 1.2 adds <b>roles</b> (what it is), <b>states</b> (aria-expanded, aria-checked, aria-pressed, aria-selected) and <b>properties</b> (aria-label, aria-describedby, aria-controls). ARIA adds no behavior: no focus, no keyboard handling, no click events.</p>
<h3>The five rules of ARIA use</h3>
<ol>
<li>Use a native HTML element or attribute with the built-in semantics you need whenever you can.</li>
<li>Do not change native semantics unless you really have to (no <code>&lt;h2 role="button"&gt;</code>).</li>
<li>All interactive ARIA controls must be usable with the keyboard.</li>
<li>Do not use <code>role="presentation"</code> or <code>aria-hidden="true"</code> on a focusable element.</li>
<li>All interactive elements must have an accessible name.</li>
</ol>
<h3>Accessible name computation (simplified order)</h3>
<ol>
<li><code>aria-labelledby</code> (can combine several ids, can reference hidden text)</li>
<li><code>aria-label</code></li>
<li>Native labelling: <code>&lt;label&gt;</code>, <code>alt</code>, <code>&lt;caption&gt;</code>, <code>&lt;legend&gt;</code>, or the element's text content for roles that allow name from content</li>
<li><code>title</code> as a last resort</li>
</ol>
<p><code>aria-describedby</code> adds a description, read after the name and role. WebAIM's annual Million report has repeatedly found that pages using ARIA average more detected errors than pages without it, which is the evidence behind "no ARIA is better than bad ARIA".</p>`,
    tip:'4.1.2 Name, Role, Value is the SC for custom widgets: every control exposes a name, a role, and its current state.',
    examples:[{ title:'A toggle button', lang:'HTML',
      wrong:`<span class="icon-bell" role="button"
      aria-hidden="true" tabindex="0"
      onclick="toggleAlerts()"></span>`,
      wrongWhy:'Focusable but hidden from AT (rule 4), no name (rule 5), no keyboard handler (rule 3) and no state.',
      right:`<button type="button" aria-pressed="false"
        onclick="toggleAlerts(this)">
  <svg aria-hidden="true" focusable="false">...</svg>
  Email alerts
</button>`,
      rightWhy:'A native button with a visible name and aria-pressed exposing on and off state; the icon is hidden as decoration.'}],
    quiz:[
      Q('Which source has the highest precedence in accessible name computation?',
        ['title','aria-label','aria-labelledby','placeholder'],2,
        'aria-labelledby wins over aria-label, which wins over native labels and content.'),
      Q('The first rule of ARIA use is:',
        ['Always add role attributes to every element','Use a native HTML element with the needed semantics whenever possible','Use aria-live on all dynamic content','Add aria-label to every link'],1,
        'Native elements come with behavior and are better supported.'),
      Q('What happens when aria-hidden="true" is set on a focusable button?',
        ['The button is removed from the tab order','Keyboard users can still focus it, but screen readers announce nothing useful','The button becomes disabled','It fails 1.4.3'],1,
        'aria-hidden does not remove focusability, so users land on an unnamed, invisible-to-AT element.')
    ], refs:[['W3C: Using ARIA','https://www.w3.org/TR/using-aria/'], R.apg, R.mdn]},

  { id:'aria-patterns', title:'APG Widget Patterns', exams:['WAS'], sc:['2.1.1 A','4.1.2 A'],
    lede:'The ARIA Authoring Practices Guide defines the keyboard and ARIA contract for common widgets.',
    lesson:`
<p>The APG documents patterns including Accordion, Alert, Breadcrumb, Button, Carousel, Combobox, Dialog (Modal), Disclosure, Grid, Listbox, Menu and Menubar, Radio Group, Slider, Switch, Table, Tabs, Toolbar, Tree View and Treegrid.</p>
<h3>Patterns to know cold</h3>
<ul>
<li><b>Disclosure:</b> a button with <code>aria-expanded</code> (and optionally <code>aria-controls</code>) that shows or hides content. Use this for site navigation dropdowns and FAQ toggles.</li>
<li><b>Tabs:</b> <code>role="tablist"</code> containing <code>role="tab"</code> elements with <code>aria-selected</code> and <code>aria-controls</code>, each panel <code>role="tabpanel"</code>. Tab moves into and out of the tablist; Left and Right arrows move between tabs (roving tabindex); Home and End jump to first and last. Activation can be automatic (on focus) or manual (Enter or Space).</li>
<li><b>Dialog (Modal):</b> <code>role="dialog"</code> with <code>aria-modal="true"</code> and <code>aria-labelledby</code>. Focus moves inside on open, Tab and Shift+Tab cycle inside, Escape closes, focus returns to the trigger. The native <code>&lt;dialog&gt;</code> with <code>showModal()</code> gives much of this for free.</li>
<li><b>Combobox:</b> an input with <code>role="combobox"</code>, <code>aria-expanded</code>, <code>aria-controls</code> pointing to a listbox, and <code>aria-activedescendant</code> tracking the highlighted option while DOM focus stays in the input.</li>
<li><b>Menu:</b> <code>role="menu"</code> is for application-style menus (like a desktop app's File menu), not for website navigation.</li>
</ul>`,
    tip:'The breadcrumb at the top of this page uses the APG Breadcrumb pattern: a nav landmark, an ordered list, and aria-current="page".',
    examples:[{ title:'Tabs', lang:'HTML',
      wrong:`<div class="tabs">
  <span class="active" onclick="show(1)">Details</span>
  <span onclick="show(2)">Reviews</span>
</div>`,
      wrongWhy:'No roles, no selected state, not focusable, and no arrow-key support.',
      right:`<div role="tablist" aria-label="Product information">
  <button role="tab" id="t1" aria-selected="true"
          aria-controls="p1">Details</button>
  <button role="tab" id="t2" aria-selected="false"
          aria-controls="p2" tabindex="-1">Reviews</button>
</div>
<div role="tabpanel" id="p1" aria-labelledby="t1">...</div>
<div role="tabpanel" id="p2" aria-labelledby="t2" hidden>...</div>
<!-- script: Left/Right arrows move focus and selection -->`,
      rightWhy:'Roles, selected state, panel association and roving tabindex, following the APG Tabs pattern.'}],
    quiz:[
      Q('In the APG Tabs pattern, how does a keyboard user move between tabs in a horizontal tablist?',
        ['Tab and Shift+Tab','Left and Right arrow keys','Page Up and Page Down','Only with Enter'],1,
        'Tab moves into and out of the tablist; arrow keys move between tabs.'),
      Q('A site\'s main navigation has dropdown submenus of links. Which pattern is generally recommended?',
        ['role="menu" and role="menuitem"','Disclosure: buttons with aria-expanded that show lists of links','role="tablist"','role="listbox"'],1,
        'Menu roles bring application keyboard expectations that confuse users of site navigation.'),
      Q('When a modal dialog closes, focus should:',
        ['Go to the top of the page','Stay on the dialog container','Return to the element that opened the dialog','Move to the browser address bar'],2,
        'Returning focus preserves the user\'s place.')
    ], refs:[R.apg, R.mdn]},

  { id:'live-regions', title:'Dynamic Content & Live Regions', exams:['WAS'], sc:['4.1.3 AA'],
    lede:'Announce changes that happen away from the user\'s focus, without moving it.',
    lesson:`
<p>Screen reader users hear what is under their focus. When content changes elsewhere (a cart count, search results, a saved message), they miss it unless you announce it.</p>
<ul>
<li><code>aria-live="polite"</code> waits until the user is idle. <code>aria-live="assertive"</code> interrupts; use it sparingly for urgent messages.</li>
<li><code>role="status"</code> is polite (with implicit <code>aria-atomic="true"</code>). <code>role="alert"</code> is assertive. <code>role="log"</code> suits chat and history. <code>role="timer"</code> and <code>role="marquee"</code> are off by default.</li>
<li><code>aria-atomic="true"</code> reads the whole region, not just the changed node. <code>aria-relevant</code> tunes which changes count.</li>
<li>The region must be in the DOM <b>before</b> its content changes. Many AT ignore regions injected already filled.</li>
</ul>
<h3>4.1.3 Status Messages (AA)</h3>
<p>Status messages ("3 results found", "Item added to cart", "Saving failed") must be programmatically determinable through role or properties, so AT can present them without receiving focus.</p>
<h3>Single-page apps</h3>
<p>On route changes, update <code>document.title</code> and move focus to the new main heading (or announce the new page). This app does that: follow any topic link and focus lands on the page heading.</p>`,
    tip:'If the answer choices include "move focus to the message", remember 4.1.3 is about announcing without moving focus.',
    examples:[{ title:'Announcing "Saved"', lang:'JavaScript',
      wrong:`// creates the live region at the same moment
// as the message, so many AT miss it
const d = document.createElement('div');
d.setAttribute('aria-live', 'polite');
d.textContent = 'Saved';
document.body.append(d);`,
      wrongWhy:'The live region did not exist before the change, so it is often not announced.',
      right:`<!-- in the page from the start -->
<div role="status" id="save-status"></div>

<script>
  document.getElementById('save-status')
    .textContent = 'Draft saved at 3:42 PM';
<\/script>`,
      rightWhy:'An empty status region exists on load; updating its text triggers a polite announcement.'}],
    quiz:[
      Q('After a user filters a list, "12 results" appears without focus moving. Which approach meets 4.1.3?',
        ['Put the text in a role="status" region','Use a tooltip','Change the page title only','Use color to highlight the count'],0,
        'role="status" exposes the message to AT without moving focus.'),
      Q('Why might a live region fail to announce when it is added to the DOM already containing its text?',
        ['Browsers block live regions','Many AT only monitor live regions that existed before the change','aria-live only works on <p>','It needs tabindex'],1,
        'Create the region first, then update its content.'),
      Q('What is the implicit aria-live value of role="alert"?',
        ['off','polite','assertive','rude'],2,
        'Alerts are assertive and can interrupt the current speech.')
    ], refs:[R.mdn, R.understanding]},

  { id:'tables', title:'Data Tables', exams:['WAS','ADS'], sc:['1.3.1 A'],
    lede:'Tables are for data. Headers turn a grid of cells into something a listener can navigate.',
    lesson:`
<ul>
<li>Use <code>&lt;table&gt;</code> for tabular data only. For layout, use CSS. If a layout table cannot be removed, add <code>role="presentation"</code>.</li>
<li>Give the table a <code>&lt;caption&gt;</code> that names it.</li>
<li>Mark header cells with <code>&lt;th&gt;</code> and <code>scope="col"</code> or <code>scope="row"</code>.</li>
<li>For irregular tables with multi-level headers, use <code>id</code> on headers and <code>headers="id1 id2"</code> on data cells, or better, split into simpler tables.</li>
<li>Screen readers announce the matching header when users move between cells (NVDA and JAWS: Ctrl+Alt+arrow keys; T jumps to the next table).</li>
<li>Sortable columns: put a <code>&lt;button&gt;</code> inside the <code>&lt;th&gt;</code> and set <code>aria-sort</code> on the sorted column's header.</li>
<li>On small screens, wrap wide tables in a scrollable container. 1.4.10 Reflow allows two-dimensional scrolling for data tables. Make the container focusable (<code>tabindex="0"</code>) with a name so keyboard users can scroll it.</li>
</ul>`,
    tip:'Same concept in documents: Word needs a marked header row, and PDF needs TH tags with scope or headers/ids.',
    examples:[{ title:'A schedule table', lang:'HTML',
      wrong:`<table>
  <tr><td><b>Day</b></td><td><b>Open</b></td></tr>
  <tr><td>Monday</td><td>9 AM</td></tr>
</table>`,
      wrongWhy:'Headers are only bold data cells, and nothing names the table.',
      right:`<table>
  <caption>Library opening hours</caption>
  <thead>
    <tr><th scope="col">Day</th><th scope="col">Open</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Monday</th><td>9 AM</td></tr>
  </tbody>
</table>`,
      rightWhy:'A caption, column headers and row headers let AT announce "Monday, Open, 9 AM".'}],
    quiz:[
      Q('For a simple data table, how are header cells best associated with data cells?',
        ['<th> elements with the scope attribute','Bold text in <td> elements','A title attribute on each cell','aria-label on every <td>'],0,
        'scope="col" and scope="row" handle simple tables.'),
      Q('Which element provides the visible title of a data table?',
        ['<summary>','<caption>','<legend>','<label>'],1,
        '<caption> is the table\'s accessible name and visible title.'),
      Q('How should the current sort state of a column be exposed?',
        ['aria-sort on the column header','aria-selected on each row','A color change on the header','role="sort"'],0,
        'aria-sort="ascending" or "descending" goes on the sorted header.')
    ], refs:[['W3C Tables tutorial','https://www.w3.org/WAI/tutorials/tables/'], R.mdn]},

  { id:'media', title:'Audio, Video & Captions', exams:['WAS','CPACC'], sc:['1.2.1 A','1.2.2 A','1.2.3 A','1.2.4 AA','1.2.5 AA','1.4.2 A'],
    lede:'Time-based media needs an equivalent for every channel a user cannot perceive.',
    lesson:`
<ul>
<li><b>1.2.1 Audio-only and Video-only (Prerecorded, A):</b> transcript for audio-only (podcast); transcript or audio track for video-only.</li>
<li><b>1.2.2 Captions (Prerecorded, A)</b> and <b>1.2.4 Captions (Live, AA)</b>.</li>
<li><b>1.2.3 Audio Description or Media Alternative (A):</b> either description or a full text alternative.</li>
<li><b>1.2.5 Audio Description (Prerecorded, AA):</b> at AA, description is required for important visual information not already in the audio.</li>
<li>AAA: 1.2.6 Sign Language, 1.2.7 Extended Audio Description, 1.2.8 Media Alternative, 1.2.9 Audio-only (Live).</li>
<li><b>1.4.2 Audio Control (A):</b> audio that plays automatically for more than 3 seconds needs a pause or stop, or independent volume control.</li>
</ul>
<h3>Terms</h3>
<ul>
<li><b>Captions</b> include dialogue plus speaker identification and meaningful sounds; <b>subtitles</b> usually translate dialogue only. SDH (subtitles for the Deaf and hard of hearing) combine both.</li>
<li><b>Closed</b> captions can be turned on and off; <b>open</b> captions are burned into the video.</li>
<li>Web captions use WebVTT: <code>&lt;track kind="captions" srclang="en"&gt;</code>. Automatic captions need human editing to be accurate.</li>
<li>The player itself must be keyboard operable, with labelled controls and visible focus.</li>
</ul>`,
    tip:'A describes-everything transcript satisfies 1.2.3 at Level A, but only real audio description satisfies 1.2.5 at AA.',
    examples:[{ title:'A product video', lang:'HTML',
      wrong:`<video src="tour.mp4" autoplay></video>`,
      wrongWhy:'Autoplays with sound and no controls, no captions, no description.',
      right:`<video controls preload="metadata">
  <source src="tour.mp4" type="video/mp4">
  <track kind="captions" src="tour.en.vtt"
         srclang="en" label="English" default>
  <track kind="descriptions" src="tour.desc.vtt"
         srclang="en" label="Audio description">
</video>
<p><a href="tour-transcript.html">Read the transcript</a></p>`,
      rightWhy:'User-started playback, captions, a description track (a described version of the video is better supported), and a transcript.'}],
    quiz:[
      Q('A prerecorded training video with dialogue and important on-screen demos must provide what at Level AA?',
        ['Captions only','Captions and audio description','Sign language interpretation','A transcript only'],1,
        '1.2.2 captions (A) plus 1.2.5 audio description (AA).'),
      Q('Background music autoplays for 30 seconds. What does 1.4.2 require?',
        ['Nothing, music is decorative','A way to pause or stop it, or control its volume independently','Captions for the music','A transcript'],1,
        'Audio playing more than 3 seconds needs user control.'),
      Q('What is the appropriate alternative for a prerecorded audio-only podcast?',
        ['Audio description','A transcript','Captions burned into a still image','Sign language only'],1,
        '1.2.1 requires a text alternative for prerecorded audio-only content.')
    ], refs:[['W3C Media accessibility guide','https://www.w3.org/WAI/media/av/'], R.mdn]},

  { id:'motion', title:'Motion, Timing & Seizures', exams:['WAS','CPACC'], sc:['2.2.1 A','2.2.2 A','2.3.1 A','2.3.3 AAA'],
    lede:'Give people enough time, control over movement, and protection from flashes.',
    lesson:`
<ul>
<li><b>2.2.1 Timing Adjustable (A):</b> for each time limit, users can turn it off, adjust it (to at least ten times the default), or extend it. When warned, they get at least 20 seconds to extend with a simple action, and can extend at least ten times. Exceptions: real-time events, essential limits, and limits longer than 20 hours.</li>
<li><b>2.2.2 Pause, Stop, Hide (A):</b> moving, blinking or scrolling content that starts automatically, lasts more than 5 seconds and appears alongside other content needs a pause, stop or hide control. Auto-updating content needs pause, stop, hide or control of update frequency.</li>
<li><b>2.3.1 Three Flashes or Below Threshold (A):</b> nothing flashes more than three times in any one-second period, unless the flash is below the general and red flash thresholds. 2.3.2 (AAA) removes the threshold exception.</li>
<li><b>2.3.3 Animation from Interactions (AAA):</b> motion triggered by interaction (parallax, zooming transitions) can be disabled. People with vestibular disorders can get dizzy or nauseous.</li>
</ul>
<h3>prefers-reduced-motion</h3>
<p>Operating systems expose a "reduce motion" setting that CSS reads with <code>@media (prefers-reduced-motion: reduce)</code>. This app's topic menu keeps its 2-second transition but drops the sliding motion to a plain fade when that setting is on.</p>`,
    tip:'Numbers to memorize: 20 seconds (extend warning), 5 seconds (moving content), 3 flashes per second, 20 hours (timing exception), 3 seconds (audio).',
    examples:[{ title:'An auto-rotating carousel', lang:'HTML + CSS',
      wrong:`<div class="carousel" data-autoplay="4000">
  <!-- slides rotate forever, no controls -->
</div>
<style>.slide { animation: slide 4s infinite; }</style>`,
      wrongWhy:'Moves for more than 5 seconds with no pause (2.2.2) and ignores reduced-motion preferences.',
      right:`<section aria-roledescription="carousel"
         aria-label="Featured courses">
  <button type="button" aria-pressed="false">
    Pause rotation</button>
  <!-- slides -->
</section>
<style>
@media (prefers-reduced-motion: reduce) {
  .slide { animation: none; }
}
</style>`,
      rightWhy:'A visible pause control near the start, and animation turned off for users who ask for less motion.'}],
    quiz:[
      Q('Under 2.3.1, content must not flash more than:',
        ['Once per second','Three times in any one-second period','Five times per second','Ten times per minute'],1,
        'The general limit is three flashes per second, unless below the flash thresholds.'),
      Q('A session timeout warning appears. What does 2.2.1 require for extending it?',
        ['At least 20 seconds to extend with a simple action','At least 5 seconds','A password re-entry','Nothing if the timeout is 30 minutes'],0,
        'Users must be warned and given at least 20 seconds to extend.'),
      Q('An auto-scrolling news ticker runs continuously next to the main article. What is required?',
        ['Nothing, it is decorative','A mechanism to pause, stop or hide it','Captions','A higher contrast ratio'],1,
        'It starts automatically, lasts more than 5 seconds and is shown with other content (2.2.2).')
    ], refs:[R.understanding, R.mdn]},

  { id:'responsive', title:'Reflow, Zoom, Text Spacing & Targets', exams:['WAS'], sc:['1.4.4 AA','1.4.10 AA','1.4.12 AA','1.4.13 AA','2.5.8 AA'],
    lede:'Content must survive zoom, custom spacing, small screens and imprecise pointers.',
    lesson:`
<ul>
<li><b>1.4.4 Resize Text (AA):</b> text can scale to 200% without losing content or function.</li>
<li><b>1.4.10 Reflow (AA):</b> no two-dimensional scrolling at 320 CSS px wide (1280 px at 400% zoom), except for content that needs it (maps, data tables, diagrams).</li>
<li><b>1.4.12 Text Spacing (AA):</b> nothing breaks when users set line height to 1.5, paragraph spacing to 2 times, letter spacing to 0.12 times and word spacing to 0.16 times the font size.</li>
<li><b>1.4.13 Content on Hover or Focus (AA):</b> tooltips and popovers are <b>dismissible</b> (Escape without moving the pointer), <b>hoverable</b> (the pointer can move onto them) and <b>persistent</b> (they stay until dismissed or no longer relevant).</li>
<li><b>1.3.4 Orientation (AA):</b> do not lock to portrait or landscape unless essential.</li>
<li><b>2.5.8 Target Size (Minimum, AA):</b> pointer targets at least 24 by 24 CSS px, or with enough spacing. 2.5.5 (AAA) asks for 44 by 44.</li>
<li><b>2.5.1 Pointer Gestures (A):</b> multipoint or path-based gestures need a single-pointer alternative. <b>2.5.2 Pointer Cancellation (A):</b> activate on the up-event so users can slide off to cancel. <b>2.5.7 Dragging Movements (AA):</b> anything done by dragging also works with single clicks.</li>
</ul>
<p>Never disable pinch zoom with <code>user-scalable=no</code> or <code>maximum-scale=1</code>.</p>`,
    tip:'Try this app\'s "Large text" theme, then zoom your browser to 400%. The layout drops to one column instead of scrolling sideways.',
    examples:[{ title:'Viewport and tooltips', lang:'HTML + CSS',
      wrong:`<meta name="viewport"
  content="width=device-width, maximum-scale=1, user-scalable=no">

<style>
  .card { height: 120px; overflow: hidden; } /* clips at spacing */
  .icon-btn { width: 16px; height: 16px; }
</style>`,
      wrongWhy:'Zoom disabled, fixed heights clip text when spacing is increased, and the targets are tiny.',
      right:`<meta name="viewport"
  content="width=device-width, initial-scale=1">

<style>
  .card { min-height: 7.5rem; }  /* grows with text */
  .icon-btn { min-width: 44px; min-height: 44px; }
</style>`,
      rightWhy:'Zoom allowed, containers grow with content, and targets exceed 24 by 24 CSS px.'}],
    quiz:[
      Q('At what viewport width must content reflow without horizontal scrolling under 1.4.10?',
        ['768 CSS px','480 CSS px','320 CSS px','1024 CSS px'],2,
        '320 CSS px, the equivalent of 1280 px at 400% zoom.'),
      Q('What is the minimum target size at Level AA in WCAG 2.2 (2.5.8)?',
        ['16 by 16 CSS px','24 by 24 CSS px','44 by 44 CSS px','48 by 48 dp'],1,
        '24 by 24 at AA; 44 by 44 is the AAA criterion 2.5.5.'),
      Q('A tooltip disappears as soon as the user moves the mouse onto it to read it. Which requirement fails?',
        ['1.4.13, because it is not hoverable','1.4.3 Contrast','2.4.1 Bypass Blocks','3.1.1 Language'],0,
        'Hover content must stay visible while the pointer moves over it.')
    ], refs:[R.understanding, R.mdn]},

  { id:'cognitive', title:'Cognitive Accessibility & Plain Language', exams:['WAS','CPACC'], sc:['2.4.4 A','3.1.5 AAA','3.2.3 AA','3.2.4 AA','3.2.6 A'],
    lede:'Clear language, predictable patterns and low memory load help everyone, and are essential for some.',
    lesson:`
<p>The W3C Cognitive and Learning Disabilities Accessibility Task Force (COGA) publishes <i>Making Content Usable for People with Cognitive and Learning Disabilities</i>. Many of its objectives go beyond WCAG success criteria.</p>
<h3>Related WCAG criteria</h3>
<ul>
<li><b>2.4.4 Link Purpose (In Context, A):</b> link text, with its context, explains the destination. "Read more" repeated ten times does not.</li>
<li><b>3.2.3 Consistent Navigation (AA)</b> and <b>3.2.4 Consistent Identification (AA)</b>: repeated navigation stays in the same order; same function, same name.</li>
<li><b>3.2.6 Consistent Help (A, new in 2.2):</b> help mechanisms (contact details, chat, FAQ) appear in the same relative order on each page.</li>
<li><b>3.1.5 Reading Level (AAA):</b> when text needs more than lower secondary education reading ability, provide a simpler version or supplement.</li>
<li><b>3.3.8 Accessible Authentication:</b> no memory or puzzle tests without an alternative.</li>
</ul>
<h3>Plain language habits</h3>
<ul>
<li>Short sentences and common words. Explain jargon and abbreviations on first use.</li>
<li>One idea per paragraph, clear headings, and lists for steps.</li>
<li>Put the most important information first.</li>
<li>ISO 24495-1:2023 is the international plain language standard.</li>
</ul>`,
    tip:'CPACC counts cognitive disabilities among the most common and least addressed. Expect questions on memory, attention and literacy barriers.',
    examples:[{ title:'Link text', lang:'HTML',
      wrong:`<p>New pricing starts in May.
  <a href="/pricing">Click here</a> for details.</p>
<a href="/a11y-report">Read more</a>`,
      wrongWhy:'Out of context (a screen reader links list, a voice command), "Click here" and "Read more" mean nothing.',
      right:`<p><a href="/pricing">See the new pricing</a>,
  starting in May.</p>
<a href="/a11y-report">Read the 2026 accessibility report</a>`,
      rightWhy:'Each link makes sense on its own, which also helps people with cognitive disabilities scan.'}],
    quiz:[
      Q('WCAG 3.1.5 Reading Level (AAA) uses which benchmark?',
        ['Primary education level','Lower secondary education level','University level','Grade 12'],1,
        'Supplemental content is needed when text requires more than lower secondary reading ability.'),
      Q('Which approach satisfies 3.3.8 Accessible Authentication (Minimum)?',
        ['Blocking paste into the password field','Allowing paste and password managers to fill credentials','Requiring users to retype a code from an image','Asking users to solve a math puzzle'],1,
        'A mechanism such as paste or password-manager support means users do not need to recall or transcribe.'),
      Q('A news page has 20 links reading only "Read more". Which SC is most directly at risk?',
        ['2.4.4 Link Purpose (In Context)','1.4.1 Use of Color','2.1.2 No Keyboard Trap','1.2.2 Captions'],0,
        'Link purpose must be determinable from the link text or its programmatic context.')
    ], refs:[R.coga, R.understanding]},
  ]},
/* ------------------------------------------------------------------ */
{ id:'documents', title:'Documents & PDF', exams:['ADS'],
  blurb:'Word, PowerPoint, Excel, PDF, InDesign, EPUB and email: create, test and remediate.',
  sections:[
  { id:'word', title:'Accessible Word Documents', exams:['ADS'], sc:['1.3.1 A','2.4.2 A'],
    lede:'Accessible PDFs start in the source file. Structure it in Word and the tags follow.',
    lesson:`
<h3>Structure</h3>
<ul>
<li>Apply built-in <b>Heading 1, 2, 3</b> styles (Home tab, Styles gallery). Change how they look by modifying the style, not by formatting text by hand.</li>
<li>Use the bulleted and numbered list buttons, not typed dashes or numbers.</li>
<li>Build a table of contents from headings (References, Table of Contents).</li>
<li>Use built-in footnotes, captions and columns. Do not fake columns with tabs or spaces.</li>
<li>Create space with paragraph spacing (Space Before and After), not empty paragraphs. Use a page break, not repeated Enter presses.</li>
</ul>
<h3>Images and objects</h3>
<ul>
<li>Add alt text (right-click, View Alt Text) or check "Mark as decorative".</li>
<li>Set images to <b>In Line with Text</b>. Floating objects can fall out of reading order.</li>
<li>Avoid text boxes, SmartArt with meaning that is not in text, and watermarks carrying information.</li>
</ul>
<h3>Tables</h3>
<ul>
<li>Use simple tables with one header row. In Table Properties, Row tab, check "Repeat as header row at the top of each page", which also marks the header for AT.</li>
<li>Avoid merged or split cells and blank rows or columns used for spacing. Do not let rows break across pages.</li>
</ul>
<h3>Document settings</h3>
<ul>
<li>Set the <b>Title</b> in File, Info, Properties, and the language (Review, Language).</li>
<li>Use descriptive hyperlink text.</li>
<li>Run <b>Review, Check Accessibility</b> and fix errors and warnings; the checker cannot judge alt text quality or reading logic.</li>
<li>To export to PDF, use File, Save As PDF with "Document structure tags for accessibility" selected (or the Acrobat add-in with tagging enabled). Print to PDF produces an untagged file.</li>
</ul>`,
    tip:'ADS questions often ask which step preserves tags in export. Answer: Save As or Export with tagging, never Print to PDF.',
    examples:[{ title:'A section heading and spacing', lang:'Word steps',
      wrong:`"Introduction"
  Style: Normal, Bold, 16 pt
[Enter] [Enter] [Enter]      <- empty paragraphs for space
Image: Square wrap, floating, no alt text
File > Print > Microsoft Print to PDF`,
      wrongWhy:'Looks like a heading but is tagged as a paragraph, empty paragraphs are read as "blank", and printing to PDF drops all tags.',
      right:`"Introduction"
  Style: Heading 1 (modified to 16 pt)
  Paragraph: Space After 12 pt
Image: In Line with Text
  Alt text: "Enrollment rose from 1,200 to 1,850"
File > Save As > PDF
  Options: Document structure tags for accessibility ✔`,
      rightWhy:'Real heading style, spacing through formatting, an inline image with meaningful alt text, and a tagged export.'}],
    quiz:[
      Q('What is the correct way to create a section heading in Word?',
        ['Make the text bold and 16 pt','Apply a built-in Heading style such as Heading 2','Insert a text box','Underline the text'],1,
        'Heading styles become H tags in PDF and are navigable in Word\'s Navigation pane.'),
      Q('How should images be positioned so the reading order stays predictable?',
        ['Behind Text','Square wrapping','In Line with Text','Tight wrapping'],2,
        'Inline images sit in the text flow, so they keep their place in the reading order.'),
      Q('How do you mark a Word table\'s header row so AT recognizes it?',
        ['Bold the first row','Table Properties, Row tab, "Repeat as header row at the top of each page"','Shade the first row','Merge the first row cells'],1,
        'This setting marks the row as a header and exports it as TH.')
    ], refs:[R.msAcc, R.ae]},

  { id:'pdf', title:'PDF Accessibility & PDF/UA', exams:['ADS'], sc:['1.3.1 A','1.3.2 A','1.1.1 A'],
    lede:'A PDF is accessible when its tag tree carries the structure, in the right order, with real text.',
    lesson:`
<h3>How PDF accessibility works</h3>
<p>A tagged PDF contains a <b>structure tree</b> of tags, similar to HTML, that AT reads. Content that is not tagged, or tagged in the wrong order, is lost or garbled.</p>
<h3>Common tags</h3>
<ul>
<li><code>&lt;Document&gt;</code> root, <code>&lt;H1&gt;</code>-<code>&lt;H6&gt;</code>, <code>&lt;P&gt;</code></li>
<li>Lists: <code>&lt;L&gt;</code> containing <code>&lt;LI&gt;</code>, each with <code>&lt;Lbl&gt;</code> (bullet or number) and <code>&lt;LBody&gt;</code></li>
<li>Tables: <code>&lt;Table&gt;</code>, <code>&lt;TR&gt;</code>, <code>&lt;TH&gt;</code> (with Scope, or headers/ids for complex tables), <code>&lt;TD&gt;</code></li>
<li><code>&lt;Figure&gt;</code> with an Alt attribute; <code>&lt;Link&gt;</code> containing the text and a Link-OBJR object reference; <code>&lt;Note&gt;</code>, <code>&lt;Reference&gt;</code>, <code>&lt;Span&gt;</code> (for language changes)</li>
<li><b>Artifacts</b> are content outside the tag tree: running headers and footers, page numbers, decorative lines.</li>
</ul>
<h3>Standards and tools</h3>
<ul>
<li><b>PDF/UA-1</b> (ISO 14289-1) and <b>PDF/UA-2</b> (ISO 14289-2:2024, built on PDF 2.0).</li>
<li>The <b>Matterhorn Protocol</b> (PDF Association) lists the failure conditions for testing PDF/UA-1.</li>
<li>Checkers: <b>Acrobat Pro</b> Accessibility Checker (Full Check) and <b>PAC</b> (PDF Accessibility Checker, which tests against PDF/UA and WCAG). Both need manual review with a screen reader.</li>
<li>In Acrobat Pro: Tags panel (tag tree), Reading Order tool, Order panel, Content panel, and Table Editor for header scope.</li>
</ul>
<h3>Remediation checklist</h3>
<ul>
<li>Scanned image-only PDF? Run OCR (Scan and OCR) first so there is real text.</li>
<li>Set the document title (File, Properties, Description) and Initial View to show the Document Title.</li>
<li>Set the primary language (Properties, Advanced).</li>
<li>Check tag order matches the logical reading order; fix headings, lists, tables and figures; artifact decorative content.</li>
<li>Form fields: logical tab order and a tooltip on each field (the tooltip becomes its accessible name).</li>
<li>Long documents: add bookmarks generated from headings.</li>
</ul>`,
    tip:'Know which Acrobat panel does what: Tags panel = structure, Order panel = reading order of content, Reading Order tool = quick tagging of regions.',
    examples:[{ title:'A report\'s tag tree', lang:'PDF tags',
      wrong:`<Document>
  <P>  Annual Report 2026
  <P>  1. Overview
  <P>  Page 3 of 40         <- running footer
  <Figure>                  <- no Alt text
  <P>  • Growth in all regions`,
      wrongWhy:'Headings tagged as paragraphs, page furniture read as content, a figure with no alternate text, and a list tagged as text.',
      right:`<Document>
  <H1>  Annual Report 2026
  <H2>  1. Overview
  <Figure Alt="Revenue rose 12% from 2025 to 2026">
  <L>
    <LI> <Lbl>•</Lbl> <LBody>Growth in all regions</LBody>
(Artifact: "Page 3 of 40")`,
      rightWhy:'Real heading levels, the footer artifacted, a figure with Alt, and a properly nested list.'}],
    quiz:[
      Q('Running headers, footers and page numbers in a PDF should usually be:',
        ['Tagged as <H1>','Marked as artifacts','Tagged as <Figure>','Left untagged in the content stream only'],1,
        'Artifacts are ignored by AT, which avoids repeated page furniture being read.'),
      Q('What is the Matterhorn Protocol?',
        ['A PDF encryption method','A set of failure conditions for testing PDF/UA conformance','A screen reader for PDFs','An OCR engine'],1,
        'Published by the PDF Association to support PDF/UA-1 testing.'),
      Q('A PDF is a scanned image with no selectable text. What is the first remediation step?',
        ['Add alt text to the whole page','Run OCR to create real text, then tag and check','Add bookmarks','Set Initial View'],1,
        'Without real text, there is nothing to tag.')
    ], refs:[R.pdfua, ['PAC PDF Accessibility Checker','https://pac.pdf-accessibility.org/'], R.ae]},

  { id:'slides-sheets', title:'PowerPoint & Excel', exams:['ADS'], sc:['1.3.2 A','2.4.2 A'],
    lede:'Slides need titles and reading order; spreadsheets need clean, labelled data.',
    lesson:`
<h3>PowerPoint</h3>
<ul>
<li>Build slides from <b>layouts and placeholders</b>. Content in placeholders is read in a reliable order.</li>
<li>Give every slide a <b>unique title</b>. If a title should not show, you can position it off the slide, or hide it with the Accessibility ribbon's hide option in current Microsoft 365 versions.</li>
<li>Check reading order in the <b>Reading Order pane</b> (Review, Check Accessibility). The older <b>Selection Pane lists objects in reverse</b>: the bottom item is read first.</li>
<li>Alt text for images, charts and SmartArt, or mark them decorative.</li>
<li>Captions or subtitles for embedded video; avoid automatic slide transitions and heavy animation.</li>
<li>Use high-contrast themes and large fonts; do not convey meaning with color alone.</li>
</ul>
<h3>Excel</h3>
<ul>
<li>Give each worksheet a unique, descriptive name, and delete blank sheets.</li>
<li>Start data in cell <b>A1</b>, avoid blank rows and columns inside a data range, and avoid merged cells.</li>
<li>Use <b>Format as Table</b> with "My table has headers" checked, and give the table a name.</li>
<li>Alternatively, define header names so screen readers announce them (for example a defined name starting with <code>ColumnTitle</code> or <code>RowTitle</code>, which JAWS recognizes).</li>
<li>Alt text for charts, clear chart titles and axis labels, and text labels on data, not only colors.</li>
<li>Use meaningful hyperlink text and run the Accessibility Checker.</li>
</ul>`,
    tip:'PowerPoint checker errors to recognize: missing slide titles, duplicate slide titles, missing alt text, reading order to check.',
    examples:[{ title:'A slide built from shapes', lang:'Slide structure',
      wrong:`Layout: Blank
Text box: "Q3 Results"          (styled like a title)
Text box: "Revenue up 12%"
Picture: chart.png              (no alt text)
Selection Pane (top to bottom):
  Title text box, Chart, Body text  <- read in reverse`,
      wrongWhy:'No real title placeholder, no alt text, and the reading order was never checked.',
      right:`Layout: Title and Content
Title placeholder: "Q3 Results"
Content placeholder: "Revenue up 12%"
Chart: native chart
  Alt text: "Revenue by quarter; Q3 highest at $4.2M"
Reading Order pane: Title, Body text, Chart`,
      rightWhy:'The slide has a title in the title placeholder, content in order, and a chart with a meaningful alternative.'}],
    quiz:[
      Q('What should every PowerPoint slide have?',
        ['A background image','A unique slide title','An animation','A footer'],1,
        'Titles let screen reader users navigate and tell slides apart.'),
      Q('Which setup is best for an Excel data table?',
        ['Start in C5 with merged header cells','Format as Table with a header row, starting at A1, no merged cells','Use color only to mark headers','Leave blank rows between groups'],1,
        'A clean, named table with headers is what AT can interpret.'),
      Q('In PowerPoint\'s Selection Pane, in what order are objects read by a screen reader?',
        ['Top to bottom','Bottom to top','Alphabetical','Left to right on the slide'],1,
        'The Selection Pane lists objects in reverse reading order; the Reading Order pane shows them in order.')
    ], refs:[['Microsoft: Make PowerPoint accessible','https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25'], ['Microsoft: Make Excel accessible','https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593']]},

  { id:'publishing', title:'InDesign, EPUB & Alternate Formats', exams:['ADS'], sc:['1.3.2 A'],
    lede:'Long-form publishing, digital books, and formats like braille and large print.',
    lesson:`
<h3>Adobe InDesign</h3>
<ul>
<li>Use paragraph and character styles, and map them to export tags (Edit All Export Tags) such as H1, H2 and P.</li>
<li>Control reading order with the <b>Articles panel</b> and check "Use for Reading Order in Tagged PDF".</li>
<li>Add alt text with Object Export Options. Anchor images in the text flow and mark decorative items as artifacts.</li>
<li>Set the document title and language, then export to Adobe PDF (Interactive or Print) with Create Tagged PDF checked, or to EPUB.</li>
</ul>
<h3>EPUB</h3>
<ul>
<li>EPUB 3 uses HTML and CSS, so web accessibility rules apply to content.</li>
<li>The W3C <b>EPUB Accessibility 1.1</b> spec requires WCAG conformance and accessibility <b>metadata</b> using schema.org properties: <code>accessMode</code>, <code>accessibilityFeature</code>, <code>accessibilityHazard</code> and <code>accessibilitySummary</code>.</li>
<li>Provide a navigation document (table of contents) and page list when there is a print source.</li>
<li>Check files with <b>Ace by DAISY</b>.</li>
</ul>
<h3>Alternate formats</h3>
<ul>
<li><b>Large print:</b> commonly at least 18 pt in a clear sans-serif, with generous spacing and no justified text.</li>
<li><b>Braille:</b> produced by transcription (for example with Duxbury), using contracted (UEB Grade 2) or uncontracted braille.</li>
<li><b>Scanned content</b> needs OCR, then proofreading, before it can be structured.</li>
<li>Also: DAISY talking books, audio, and easy read versions.</li>
</ul>`,
    tip:'ADS spans creation (authoring tools) and output formats (PDF, EPUB, braille, large print). Know which tool checks which format.',
    examples:[{ title:'EPUB package metadata', lang:'OPF / XML',
      wrong:`<metadata>
  <dc:title>Field Guide to Birds</dc:title>
  <dc:language>en</dc:language>
</metadata>`,
      wrongWhy:'No accessibility metadata, so readers and stores cannot tell users what the book supports.',
      right:`<metadata>
  <dc:title>Field Guide to Birds</dc:title>
  <dc:language>en</dc:language>
  <meta property="schema:accessMode">textual</meta>
  <meta property="schema:accessMode">visual</meta>
  <meta property="schema:accessibilityFeature">alternativeText</meta>
  <meta property="schema:accessibilityFeature">structuralNavigation</meta>
  <meta property="schema:accessibilityHazard">none</meta>
  <meta property="schema:accessibilitySummary">All images
    have alt text. Headings and a table of contents
    support navigation.</meta>
</metadata>`,
      rightWhy:'Discoverable accessibility metadata as the EPUB Accessibility specification requires.'}],
    quiz:[
      Q('Which InDesign feature controls the reading order of exported, tagged content?',
        ['Pages panel','Articles panel','Swatches panel','Layers panel'],1,
        'The Articles panel, with "Use for Reading Order in Tagged PDF", sets export order.'),
      Q('Which tool checks EPUB publications against accessibility requirements?',
        ['PAC','Ace by DAISY','ANDI','Lighthouse'],1,
        'Ace by DAISY evaluates EPUB content and metadata.'),
      Q('Which metadata property summarizes an EPUB\'s accessibility in human-readable text?',
        ['schema:accessibilitySummary','dc:rights','schema:author','dc:format'],0,
        'accessibilitySummary is a short description of the publication\'s accessibility.')
    ], refs:[R.daisy, ['W3C EPUB Accessibility 1.1','https://www.w3.org/TR/epub-a11y-11/']]},

  { id:'email', title:'Accessible Email', exams:['ADS','CPACC'], sc:['1.1.1 A','1.3.1 A'],
    lede:'Marketing emails and everyday messages both need structure, real text and alt text.',
    lesson:`
<h3>HTML and marketing email</h3>
<ul>
<li>Add <code>lang</code> and <code>dir</code> on the <code>&lt;html&gt;</code> element, and a meaningful <code>&lt;title&gt;</code>.</li>
<li>Layout tables need <code>role="presentation"</code> so screen readers do not announce rows and columns.</li>
<li>Use real headings (<code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>) and paragraphs, not styled spans.</li>
<li>Write live HTML text, not image-only emails. Many clients block images by default, and image text cannot be read, resized or translated.</li>
<li>Alt text on every meaningful image; <code>alt=""</code> on spacers and decoration.</li>
<li>Left-aligned body text, at least about 14 to 16 px, sufficient contrast, and descriptive link and button text.</li>
<li>Include a plain-text MIME part as an alternative.</li>
<li>Test in dark mode: transparent logos and hard-coded colors can disappear or lose contrast.</li>
</ul>
<h3>Everyday email</h3>
<ul>
<li>Clear subject lines, headings and lists from the editor, descriptive links, and alt text on inline images.</li>
<li>Run Outlook's accessibility checker (Check Accessibility) before sending.</li>
<li>Attachments must be accessible too, or offer an accessible alternative.</li>
</ul>`,
    tip:'The same principles cross formats: structure, text alternatives, contrast and meaningful links. Email just has worse CSS support.',
    examples:[{ title:'A promotional email', lang:'HTML email',
      wrong:`<html>
<body>
  <table>
    <tr><td><img src="sale-banner-with-all-the-text.jpg"></td></tr>
    <tr><td><a href="...">Click here</a></td></tr>
  </table>
</body>
</html>`,
      wrongWhy:'All text in an image with no alt, a layout table read as data, no language, and a vague link.',
      right:`<html lang="en" dir="ltr">
<head><title>Spring sale: 30% off plants</title></head>
<body>
  <table role="presentation" width="100%">
    <tr><td>
      <img src="ferns.jpg" alt="Three potted ferns on a shelf">
      <h1>Spring sale: 30% off all plants</h1>
      <p>Ends Sunday, April 12.</p>
      <a href="...">Shop the spring sale</a>
    </td></tr>
  </table>
</body>
</html>`,
      rightWhy:'Live text with a heading, a presentational layout table, language set, meaningful alt text and link.'}],
    quiz:[
      Q('How should layout tables in HTML email be marked?',
        ['role="presentation"','role="grid"','With <th> elements','With aria-label="table"'],0,
        'This removes table semantics so screen readers do not announce rows and columns.'),
      Q('Why are image-only promotional emails a problem?',
        ['They load too quickly','Images may be blocked and their text cannot be read by AT, resized or translated','They always fail spam filters','They cannot include links'],1,
        'Put the message in live HTML text.'),
      Q('Which should an accessible HTML email include as an alternative?',
        ['A plain-text MIME part','A Flash version','A PDF attachment only','An audio file'],0,
        'The multipart plain-text version helps some users and clients.')
    ], refs:[['W3C: Writing for accessibility','https://www.w3.org/WAI/tips/writing/'], R.ae]},
  ]},
/* ------------------------------------------------------------------ */
{ id:'mobile', title:'Mobile Apps', exams:['WAS','CPACC'],
  blurb:'Native iOS and Android: labels, traits, touch targets, gestures and testing.',
  sections:[
  { id:'native-apps', title:'Native Mobile Apps (iOS & Android)', exams:['WAS','CPACC'], sc:['2.5.4 A','1.3.4 AA','2.5.8 AA'],
    lede:'WCAG applies to apps too. Platform APIs are how you meet it.',
    lesson:`
<p>The W3C's guidance on applying WCAG to mobile, and laws like the ADA Title II rule and EN 301 549, treat native apps as covered. The principles are the same; the APIs differ.</p>
<h3>iOS (UIKit and SwiftUI)</h3>
<ul>
<li><code>accessibilityLabel</code> (name), <code>accessibilityHint</code> (result of the action), <code>accessibilityValue</code>, and traits such as <code>.button</code>, <code>.header</code>, <code>.selected</code>.</li>
<li>SwiftUI modifiers: <code>.accessibilityLabel()</code>, <code>.accessibilityAddTraits(.isHeader)</code>, <code>.accessibilityElement(children: .combine)</code> to group.</li>
<li>Support <b>Dynamic Type</b> so text scales with system settings.</li>
<li>Apple's Human Interface Guidelines recommend touch targets of at least 44 by 44 points.</li>
</ul>
<h3>Android (Views and Compose)</h3>
<ul>
<li><code>android:contentDescription</code> for images and icon buttons; <code>android:labelFor</code> to link labels to inputs; <code>importantForAccessibility="no"</code> for decoration.</li>
<li>Compose: <code>Modifier.semantics { contentDescription = ...; heading() }</code>, <code>stateDescription</code>, and <code>mergeDescendants</code> to group.</li>
<li>Use <code>sp</code> units so text respects font scaling. Material guidance calls for touch targets of at least 48 by 48 dp.</li>
</ul>
<h3>Across platforms</h3>
<ul>
<li>Support both orientations (1.3.4) and do not rely on motion like shaking without an on-screen alternative and a way to turn it off (2.5.4 Motion Actuation).</li>
<li>Provide single-tap alternatives to complex gestures (2.5.1) and dragging (2.5.7).</li>
<li>Logical focus order and grouping; announce changes (UIAccessibility.post, or Compose liveRegion).</li>
<li>Test with VoiceOver, TalkBack, Switch Control, Voice Control, large text, and tools such as Xcode's Accessibility Inspector and Google's Accessibility Scanner.</li>
</ul>`,
    tip:'For the exams, know the equivalents: alt on the web, contentDescription on Android, accessibilityLabel on iOS.',
    examples:[{ title:'An icon button', lang:'Android XML + SwiftUI',
      wrong:`<!-- Android -->
<ImageButton
    android:src="@drawable/ic_trash"
    android:layout_width="24dp"
    android:layout_height="24dp" />

// SwiftUI
Image(systemName: "trash").onTapGesture { delete() }`,
      wrongWhy:'No accessible name, a 24 dp target, and an image with a tap gesture is not exposed as a button.',
      right:`<!-- Android -->
<ImageButton
    android:src="@drawable/ic_trash"
    android:contentDescription="@string/delete_message"
    android:minWidth="48dp"
    android:minHeight="48dp" />

// SwiftUI
Button(action: delete) {
    Image(systemName: "trash")
}
.accessibilityLabel("Delete message")`,
      rightWhy:'Named controls with the button role and touch targets that meet platform guidance.'}],
    quiz:[
      Q('Which Android attribute gives an ImageButton its accessible name?',
        ['android:hint','android:contentDescription','android:tag','android:tooltip only'],1,
        'contentDescription is read by TalkBack as the element\'s name.'),
      Q('What minimum touch target size does Android\'s Material guidance recommend?',
        ['24 by 24 dp','32 by 32 dp','48 by 48 dp','64 by 64 dp'],2,
        '48 by 48 dp (about 9 mm). Apple recommends 44 by 44 points.'),
      Q('An app uses "shake to undo". What does 2.5.4 Motion Actuation require?',
        ['Nothing, shaking is a gesture','An on-screen alternative control and a way to disable motion response','A tutorial video','Haptic feedback'],1,
        'Motion-triggered functions need a UI alternative and must be able to be turned off.')
    ], refs:[['W3C: Mobile accessibility','https://www.w3.org/WAI/standards-guidelines/mobile/'], R.deque, R.ae]},
  ]},
/* ------------------------------------------------------------------ */
{ id:'testing', title:'Testing & QA', exams:['WAS','ADS'],
  blurb:'Screen readers, automated and manual testing, DHS Trusted Tester, and accessibility in the QA process.',
  sections:[
  { id:'screen-readers', title:'Screen Reader Testing', exams:['WAS'], sc:['4.1.2 A'],
    lede:'Listen to your interface the way a blind user does.',
    lesson:`
<h3>Common pairings</h3>
<ul>
<li><b>NVDA</b> (free, Windows) with Firefox or Chrome. <b>JAWS</b> (commercial, Windows) with Chrome or Edge.</li>
<li><b>VoiceOver</b> on macOS with Safari, and on iOS with Safari.</li>
<li><b>TalkBack</b> on Android with Chrome. <b>Narrator</b> on Windows with Edge.</li>
</ul>
<h3>Modes</h3>
<p>Windows screen readers use a <b>browse (virtual) mode</b> where letter keys are navigation shortcuts, and a <b>focus (forms) mode</b> where keystrokes pass to the page for typing. They switch automatically in form fields, or manually (NVDA: Insert+Space).</p>
<h3>Shortcuts to know</h3>
<ul>
<li><b>NVDA and JAWS (browse mode):</b> H next heading, 1 to 6 heading by level, K (NVDA) or U/V (JAWS) links, F form field, T table, B button, Tab next focusable. NVDA: D next landmark, Insert+F7 elements list. JAWS: R next region, Insert+F6 headings list, Insert+F7 links list, Insert+F5 form fields list. Ctrl stops speech.</li>
<li><b>VoiceOver on macOS:</b> VO keys are Control+Option. VO+Right Arrow reads next item, VO+U opens the Rotor, VO+Command+H next heading, VO+Space activates.</li>
<li><b>iOS VoiceOver and TalkBack:</b> swipe right or left to move, double-tap to activate. iOS uses a two-finger rotate for the Rotor; TalkBack has reading controls and a menu.</li>
</ul>
<h3>What to listen for</h3>
<p>Every control announces name, role and state ("Menu, button, collapsed"). Headings and landmarks give a usable outline. Nothing is read twice or skipped. Dynamic changes are announced.</p>`,
    tip:'Deque University\'s screen reader shortcut pages are the fastest reference while you practise. Keep one open next to NVDA.',
    examples:[{ title:'An icon-only close button', lang:'HTML + expected speech',
      wrong:`<button class="close">
  <svg viewBox="0 0 24 24"><path d="..."/></svg>
</button>

Screen reader: "button"`,
      wrongWhy:'The user hears "button" with no idea what it does.',
      right:`<button class="close" aria-label="Close dialog">
  <svg viewBox="0 0 24 24" aria-hidden="true"
       focusable="false"><path d="..."/></svg>
</button>

Screen reader: "Close dialog, button"`,
      rightWhy:'The accessible name tells the user what the button does, and the decorative SVG is hidden.'}],
    quiz:[
      Q('On macOS, the VoiceOver (VO) modifier keys are:',
        ['Command+Shift','Control+Option','Option+Shift','Fn+Control'],1,
        'VO is Control+Option (Caps Lock can also be set as the VO key).'),
      Q('In NVDA browse mode, which key jumps to the next landmark?',
        ['L','D','M','R'],1,
        'D moves by landmark in NVDA. JAWS uses R for regions.'),
      Q('Which screen reader mode passes keystrokes to the web page so users can type in a field?',
        ['Browse (virtual) mode','Focus (forms) mode','Rotor mode','Say all'],1,
        'Focus mode sends keys to the control instead of using them as shortcuts.')
    ], refs:[R.deque, R.howPeople]},

  { id:'auto-manual', title:'Automated & Manual Testing', exams:['WAS','ADS'], sc:[],
    lede:'Tools find the easy issues fast. People find the rest.',
    lesson:`
<h3>Automated tools</h3>
<ul>
<li>Engines and extensions: axe-core and axe DevTools, WAVE, Lighthouse, Accessibility Insights for Web, ARC Toolkit, Pa11y, IBM Equal Access Checker.</li>
<li>In CI: jest-axe, cypress-axe, @axe-core/playwright, and linting such as eslint-plugin-jsx-a11y.</li>
<li>They reliably catch issues like missing alt attributes, missing labels, low contrast and invalid ARIA. They cannot judge whether alt text is accurate, whether focus order makes sense, or whether an error message is helpful. Vendor estimates of automated coverage range from roughly a third to just over half of issues, depending on how you count.</li>
</ul>
<h3>Manual checks</h3>
<ul>
<li>Keyboard-only pass through every interactive path.</li>
<li>Zoom to 200% and 400%; test at 320 px width; apply a text spacing bookmarklet.</li>
<li>Screen reader passes on at least two pairings.</li>
<li>Contrast checks with a tool such as TPGi's Colour Contrast Analyser, including states and focus.</li>
<li>Check reduced motion, orientation, and high contrast or forced colors modes.</li>
</ul>
<h3>Methodology</h3>
<ul>
<li><b>WCAG-EM</b> (W3C): define scope, explore the site, select a representative sample, audit the sample, report findings.</li>
<li><b>ACT Rules</b> (Accessibility Conformance Testing) standardize how individual checks are tested so tools agree.</li>
<li><b>Usability testing with disabled people</b> finds problems no checklist does. Recruit AT users and pay them fairly.</li>
</ul>`,
    tip:'"Which of these can an automated tool determine?" The answer is almost always something structural (missing alt), never something about meaning.',
    examples:[{ title:'A test strategy', lang:'Playwright test',
      wrong:`// "Lighthouse scored 100, ship it."
test('a11y', async () => {
  // no tests; relies on one score
});`,
      wrongWhy:'A perfect automated score can still hide keyboard traps, bad alt text and broken focus management.',
      right:`import AxeBuilder from '@axe-core/playwright';

test('checkout has no detectable violations', async ({ page }) => {
  await page.goto('/checkout');
  const r = await new AxeBuilder({ page })
    .withTags(['wcag2a','wcag2aa','wcag21aa','wcag22aa']).analyze();
  expect(r.violations).toEqual([]);
});

test('checkout works by keyboard', async ({ page }) => {
  await page.goto('/checkout');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to main content' }))
    .toBeFocused();
  // ...continue through the flow, then do a manual screen reader pass
});`,
      rightWhy:'Automated scanning in CI plus scripted keyboard checks, with manual and AT testing on top.'}],
    quiz:[
      Q('Which can an automated tool not reliably determine?',
        ['Whether an <img> has an alt attribute','Whether the alt text accurately describes the image\'s purpose','Whether text contrast meets 4.5:1','Whether an input has a label element'],1,
        'Accuracy of meaning requires human judgment.'),
      Q('WCAG-EM is:',
        ['A browser extension','A W3C methodology for evaluating a website\'s conformance','A screen reader','A legal standard in the EU'],1,
        'It covers scope, exploration, sampling, auditing and reporting.'),
      Q('What provides the strongest evidence that a product is usable by people with disabilities?',
        ['A 100 Lighthouse score','An overlay widget','Usability testing with people with disabilities','A VPAT with no remarks'],2,
        'Real users with AT find barriers that audits miss.')
    ], refs:[R.wcagem, ['W3C ACT Rules','https://www.w3.org/WAI/standards-guidelines/act/rules/'], R.ae]},

  { id:'trusted-tester', title:'DHS Trusted Tester & Section 508 Testing', exams:['WAS','CPACC'], sc:[],
    lede:'A standardized, repeatable manual test process used across the US federal government.',
    lesson:`
<p>The Department of Homeland Security's <b>Section 508 Trusted Tester</b> program trains and certifies testers in a consistent manual process for web content. The current test process version is <b>5.1.3</b> (April 2024). It is aligned with the <b>ICT Testing Baseline for Web Accessibility</b>, which maps Section 508 (WCAG 2.0 A and AA) to testable requirements, so different testers reach the same results.</p>
<h3>How it works</h3>
<ul>
<li>Tests are organized by numbered topics (keyboard, focus, forms, images, headings, tables, multimedia, and more), each with defined steps.</li>
<li>Each test result is one of: <b>Pass</b>, <b>Fail</b>, <b>Does Not Apply (DNA)</b> or <b>Not Tested</b>.</li>
<li>Testers record results in the test report (the DHS test report template or the Accessibility Conformance Reporting tools used by agencies).</li>
</ul>
<h3>Tools</h3>
<ul>
<li><b>ANDI</b> (Accessible Name and Description Inspector, from the Social Security Administration): a bookmarklet with modules for focusable elements, graphics and images, links and buttons, tables, structures, color contrast, hidden content and iframes.</li>
<li><b>Colour Contrast Analyser</b> (TPGi) for contrast measurements.</li>
<li>A browser, the keyboard, and the web page itself. Trusted Tester is a code-inspection process; it does not require a screen reader.</li>
</ul>
<h3>Certification</h3>
<p>Candidates complete the DHS training course and pass the certification exam, which includes a practical test of real pages. Check the DHS page for current eligibility and cost.</p>`,
    tip:'Know the four result values and that ANDI is the primary inspection tool. Trusted Tester is manual, not automated.',
    examples:[{ title:'Recording a finding', lang:'Test report',
      wrong:`Page: Checkout
Result: looks fine, a couple of issues
Notes: fix the form`,
      wrongWhy:'No test ID, no result value, no location, no requirement, nothing a developer can act on.',
      right:`Test ID: 5.C (Form: labels/instructions)
Result: Fail
Location: /checkout, Payment step, "Card number" field
Observed: ANDI shows no accessible name; visible label
  is a <div> not associated with the input
Requirement: WCAG 2.0 1.3.1, 3.3.2, 4.1.2
Tool: ANDI (focusable elements module)`,
      rightWhy:'A repeatable result tied to a specific test, location, tool and requirement. (Test IDs here are illustrative; use the numbering in the current test process.)'}],
    quiz:[
      Q('Which tool does the Trusted Tester process use to inspect accessible names and descriptions?',
        ['JAWS','ANDI','Lighthouse','PAC'],1,
        'ANDI, from the Social Security Administration.'),
      Q('Which set lists valid Trusted Tester result values?',
        ['Pass, Fail, Does Not Apply, Not Tested','Supports, Partially Supports, Does Not Support','Critical, Serious, Moderate, Minor','A, AA, AAA'],0,
        '"Supports..." are VPAT terms; "Critical..." are severity levels.'),
      Q('The Trusted Tester process is aligned with which requirements?',
        ['WCAG 2.2 AAA','Section 508 (WCAG 2.0 A and AA) through the ICT Testing Baseline','EN 301 549 only','ATAG 2.0'],1,
        'The ICT Testing Baseline supports consistent Section 508 testing.')
    ], refs:[R.tt, ['Section508.gov: Trusted Tester','https://www.section508.gov/test/trusted-tester/'], R.andi]},

  { id:'qa', title:'Accessibility in QA & the SDLC', exams:['WAS','ADS','CPACC'], sc:[],
    lede:'Catch issues early, write bugs developers can fix, and keep them fixed.',
    lesson:`
<h3>Shift left</h3>
<ul>
<li><b>Requirements:</b> put accessibility acceptance criteria in every story ("All fields have visible labels; errors are announced").</li>
<li><b>Design:</b> annotate headings, landmarks, focus order, accessible names and states; check contrast and target size in design tools.</li>
<li><b>Development:</b> accessible component library, linting, unit tests with axe.</li>
<li><b>QA:</b> manual keyboard and screen reader tests in the definition of done.</li>
<li><b>Release and after:</b> regression tests, monitoring, and a feedback channel for users.</li>
</ul>
<p>Fixing an issue in design costs far less than fixing it after release, when it may involve rework, retesting and legal risk.</p>
<h3>Severity</h3>
<p>Rate by user impact, not by WCAG level alone. axe uses Critical, Serious, Moderate and Minor. A keyboard trap in checkout is critical: it blocks a task completely. A redundant title attribute is minor.</p>
<h3>A useful bug report</h3>
<ul>
<li>Summary, URL or screen, and the component.</li>
<li>Environment: OS, browser and AT with versions.</li>
<li>Steps to reproduce, actual result, expected result.</li>
<li>WCAG success criterion, user impact, and a suggested fix.</li>
</ul>`,
    tip:'In program questions, "train designers and developers and add criteria to requirements" beats "run a scan before launch".',
    examples:[{ title:'Bug ticket', lang:'Issue tracker',
      wrong:`Title: Accessibility broken
Body: Screen reader doesn't work on the site. Please fix.`,
      wrongWhy:'No location, no environment, no steps, no standard, no impact.',
      right:`Title: Date picker cannot be opened by keyboard (checkout)
Severity: Critical (blocks purchase for keyboard and SR users)
Env: Windows 11, Chrome 128, NVDA 2024.3
Steps: 1. Go to /checkout  2. Tab to "Delivery date"  3. Press Enter
Actual: Nothing happens; calendar opens only on mouse click
Expected: Enter or Space opens the calendar; arrows move dates
WCAG: 2.1.1 Keyboard (A)
Fix: Use a <button> trigger; follow APG date picker dialog pattern`,
      rightWhy:'Reproducible, prioritized by impact, mapped to WCAG, with a clear fix.'}],
    quiz:[
      Q('When is fixing accessibility issues most cost-effective?',
        ['After launch, when users complain','During requirements and design','During the annual audit','When a lawsuit is filed'],1,
        'Early fixes avoid rework across code, content and testing.'),
      Q('Which detail is essential in an accessibility bug report?',
        ['The tester\'s favorite browser','The AT and browser names and versions used','A screenshot only','The page\'s Lighthouse score'],1,
        'Behavior differs across AT and browser combinations.'),
      Q('A keyboard trap in the payment step should be rated:',
        ['Minor','Moderate','Critical or blocker','Enhancement'],2,
        'It prevents keyboard and many AT users from completing the task at all.')
    ], refs:[R.ae, R.wcagem]},
  ]},
/* ------------------------------------------------------------------ */
{ id:'organization', title:'Program & Service', exams:['CPACC','ADS'],
  blurb:'Program management, procurement and VPATs, customer service, and the European Accessibility Act.',
  sections:[
  { id:'program', title:'Accessibility Program Management', exams:['CPACC','ADS'], sc:[],
    lede:'Accessibility lasts when it is owned, funded, measured and built into how the organization works.',
    lesson:`
<h3>Building blocks</h3>
<ul>
<li><b>Executive sponsor</b> and a written <b>accessibility policy</b> naming the standard (for example WCAG 2.2 AA) and who is responsible.</li>
<li>A central accessibility lead or team with clear governance, plus champions in product teams.</li>
<li><b>Role-based training</b>: designers, developers, content authors, QA, procurement, customer service.</li>
<li>A <b>roadmap</b> that prioritizes by user impact, traffic and legal risk, with a budget.</li>
<li><b>Procurement</b>: require an Accessibility Conformance Report, test key claims, and include contract language on remediation.</li>
<li>An <b>accessibility statement</b> and a feedback channel with response times.</li>
<li><b>Metrics</b>: issues by severity, time to fix, percentage of pages or documents conforming, training completion.</li>
</ul>
<h3>Frameworks</h3>
<ul>
<li><b>ISO 30071-1:2019</b>: code of practice for building accessibility into ICT product development and organizational processes (it succeeded the UK's BS 8878).</li>
<li><b>W3C Accessibility Maturity Model</b>: assess maturity across dimensions such as communications, knowledge and skills, support, ICT development life cycle, personnel and procurement.</li>
<li>Plan, Do, Check, Act: continuous improvement.</li>
</ul>
<h3>VPAT and ACR</h3>
<p>The <b>VPAT</b> (Voluntary Product Accessibility Template, from ITI) is the template; the completed document is an <b>Accessibility Conformance Report (ACR)</b>. VPAT 2.x comes in editions for Section 508, EU (EN 301 549), WCAG, and INT (all three). Conformance terms: <b>Supports</b>, <b>Partially Supports</b>, <b>Does Not Support</b>, <b>Not Applicable</b>, and <b>Not Evaluated</b> (allowed only for AAA criteria). Remarks explain each rating.</p>`,
    tip:'Overlays and one-time audits are common wrong answers. Sustainable programs combine policy, training, process and accountability.',
    examples:[{ title:'An ACR row', lang:'VPAT / ACR',
      wrong:`1.1.1 Non-text Content (Level A)
Conformance Level: Supports
Remarks: (blank)`,
      wrongWhy:'An unsupported claim that buyers cannot evaluate, and that may be untrue.',
      right:`1.1.1 Non-text Content (Level A)
Conformance Level: Partially Supports
Remarks: Most images have text alternatives. Exceptions:
  dashboard chart thumbnails have no alternative, and the
  CAPTCHA has no audio option. Fix planned for release 8.2
  (Q1 2027). Tested with NVDA 2024.3 and JAWS 2025.`,
      rightWhy:'An honest rating with specific exceptions, a plan and test details.'}],
    quiz:[
      Q('A VPAT is a template used to produce:',
        ['A WCAG test script','An Accessibility Conformance Report (ACR)','A PDF/UA certificate','A legal settlement'],1,
        'The filled-in VPAT is the ACR.'),
      Q('Which VPAT conformance term means some functionality does not meet the criterion?',
        ['Supports','Partially Supports','Not Applicable','Not Evaluated'],1,
        'Partially Supports, with remarks explaining what does not.'),
      Q('Which standard is a code of practice for embedding accessibility into ICT development and organizational processes?',
        ['ISO 14289-1','ISO 30071-1','ISO/IEC 40500','EN 301 549'],1,
        '14289 is PDF/UA, 40500 is WCAG 2.0, and EN 301 549 is the EU ICT standard.')
    ], refs:[R.vpat, ['W3C Accessibility Maturity Model','https://www.w3.org/TR/maturity-model/'], R.ae]},

  { id:'customer-service', title:'Customer Service & Communication', exams:['CPACC'], sc:['3.2.6 A'],
    lede:'Respectful, flexible service is part of accessibility, and a frequent CPACC topic.',
    lesson:`
<h3>Etiquette</h3>
<ul>
<li>Speak directly to the person, not to their interpreter, companion or aide.</li>
<li>Ask before helping, and accept "no".</li>
<li>Do not touch or distract service animals, or move mobility aids without permission.</li>
<li>Language: person-first ("person with a disability") and identity-first ("disabled person", "Deaf person", "autistic person") both have strong communities behind them. Ask and follow the person's preference.</li>
<li>Avoid "suffers from", "wheelchair-bound" and "handicapped".</li>
<li>Give people time. Do not finish sentences for someone with a speech disability.</li>
</ul>
<h3>Channels and accommodations</h3>
<ul>
<li>Offer several contact methods: phone, relay services (TRS; 711 in the US; video relay for sign language users), email, chat and text.</li>
<li>Provide alternate formats on request: large print, braille, audio, accessible electronic files, easy read.</li>
<li>Keep help in a consistent place on every page (WCAG 3.2.6 Consistent Help).</li>
<li>Train support staff on AT basics so they can help callers who use screen readers or magnifiers.</li>
</ul>
<h3>Service animals under the ADA</h3>
<p>Service animals are dogs individually trained to do work or tasks for a person with a disability (miniature horses have a separate provision). When the need is not obvious, staff may ask only two questions: is the dog required because of a disability, and what work or task has it been trained to perform.</p>`,
    tip:'Customer service questions reward respect and autonomy: talk to the person, ask before helping, offer choices.',
    examples:[{ title:'A support reply', lang:'Support message',
      wrong:`Hi, we noticed you are handicapped. Our website is
fully accessible so you shouldn't have any problems.
Please try again or call us.`,
      wrongWhy:'Outdated language, dismisses the report, and offers only one channel.',
      right:`Thanks for telling us the checkout didn't work with
your screen reader. I've logged it with our web team
(ticket #4821). While we fix it, I can place the order
with you by phone, chat, or email. Which would you prefer?
We'll update you by Friday.`,
      rightWhy:'Takes the report seriously, offers alternatives, lets the customer choose, and commits to follow up.'}],
    quiz:[
      Q('A Deaf customer is using an ASL interpreter. You should:',
        ['Speak to the interpreter','Speak directly to the customer','Write everything down instead','Speak louder'],1,
        'The interpreter conveys your words; the conversation is with the customer.'),
      Q('Under the ADA, which question may staff ask about a service animal when its role is not obvious?',
        ['What is your disability?','Can you show certification?','What work or task has the dog been trained to perform?','Can the dog demonstrate its task?'],2,
        'Staff may only ask whether the dog is required because of a disability and what task it performs.'),
      Q('WCAG 3.2.6 Consistent Help requires that help mechanisms:',
        ['Appear on every page','Occur in the same relative order across pages where they appear','Include a live chat','Be available 24/7'],1,
        'It does not require help on every page; it requires consistency where help is repeated.')
    ], refs:[['ADA.gov: Service animals','https://www.ada.gov/topics/service-animals/'], R.howPeople, R.ae]},

  { id:'eaa', title:'European Accessibility Act (EAA)', exams:['CPACC'], sc:[],
    lede:'The EU law that brought accessibility requirements to private-sector products and services.',
    lesson:`
<p>The EAA is <b>Directive (EU) 2019/882</b>. Member States transposed it into national law, and its requirements apply from <b>28 June 2025</b>. It covers companies selling to EU consumers, including companies based outside the EU.</p>
<h3>What it covers</h3>
<ul>
<li><b>Products:</b> computers and operating systems, self-service terminals (ATMs, ticketing and check-in machines, payment terminals), smartphones and other consumer communication devices, TV equipment with digital services, e-readers.</li>
<li><b>Services:</b> e-commerce, consumer banking, e-books, electronic communications (including calls to 112), access to audiovisual media services, and elements of air, bus, rail and waterborne passenger transport (websites, apps, e-tickets, real-time travel information).</li>
</ul>
<h3>Key provisions</h3>
<ul>
<li><b>Microenterprises</b> (fewer than 10 employees and annual turnover or balance sheet total of no more than EUR 2 million) that provide <b>services</b> are exempt. Microenterprises dealing in products are not exempt.</li>
<li><b>Disproportionate burden</b> and <b>fundamental alteration</b> exceptions must be assessed, documented and reported to authorities when asked.</li>
<li>Service providers must publish information on how their service meets the requirements (in general terms and conditions or equivalent).</li>
<li>Transitional rules: service contracts agreed before 28 June 2025 can continue until they expire, but no later than 28 June 2030. Self-service terminals in use may continue until the end of their economically useful life, up to 20 years.</li>
<li>Following the harmonised standard <b>EN 301 549</b> gives a presumption of conformity. Its web requirements align with WCAG 2.1 AA.</li>
<li>Market surveillance authorities in each Member State enforce it; penalties are set nationally.</li>
</ul>
<h3>Getting compliant</h3>
<p>Typical steps, as in the Recite Me checklist and guide: determine whether you are in scope, audit against EN 301 549 and WCAG, prioritize and fix, publish accessibility information, train staff, set up feedback and support channels, and monitor continuously.</p>`,
    tip:'Watch for trick options about the microenterprise exemption: it applies to services, not products.',
    examples:[{ title:'Service accessibility information', lang:'Copy',
      wrong:`Accessibility: We care about all our customers.`,
      wrongWhy:'Says nothing about how the service meets requirements, and gives no way to report problems.',
      right:`How our online shop meets accessibility requirements
- Standard: EN 301 549 v3.2.1 (WCAG 2.1 AA for web and app)
- Supported: screen readers, keyboard-only use, 400% zoom,
  captions on product videos
- Known limitations: 3D product viewer has no text
  alternative; product specs cover the same details
- Feedback: access@shop.example, +44 20 7946 0000
- Enforcement body: [national market surveillance authority]`,
      rightWhy:'Explains in plain terms how the service meets the requirements, its limits, and where to go for help.'}],
    quiz:[
      Q('Are microenterprises that provide services covered by the EAA\'s service requirements?',
        ['Yes, fully','No, they are exempt','Only if based in the EU','Only for banking'],1,
        'Microenterprises providing services are exempt; those dealing in products are not.'),
      Q('Which harmonised standard gives a presumption of conformity under the EAA for ICT?',
        ['ISO 14289','EN 301 549','Section 508','ATAG 2.0'],1,
        'EN 301 549 is the EU ICT accessibility standard.'),
      Q('Which is within the EAA\'s scope?',
        ['A small bakery\'s paper menu','E-commerce services sold to consumers','Internal company intranets only','Historical archives'],1,
        'E-commerce is one of the listed services.')
    ], refs:[R.eaaCourse, R.eaaCheck, R.eaaGuide]},
  ]},
];

/* ---------- Practice exams ---------- */
export const PRACTICE = { id:'practice', title:'IAAP Practice Exams', exams:['CPACC','WAS','ADS'],
  blurb:'Exam-style questions organized by certification, with the answer shown when you miss one.',
  sections:[
  { id:'practice-cpacc', practice:true, title:'CPACC Practice', exams:['CPACC'],
    lede:'Certified Professional in Accessibility Core Competencies: disabilities and AT, universal design, and standards, laws and management.',
    quiz:[
      Q('Which is NOT one of the seven principles of Universal Design?',['Equitable use','Perceptible information','Aesthetic appeal','Low physical effort'],2,'The seven principles do not include aesthetics.'),
      Q('A person with retinitis pigmentosa most commonly experiences:',['Loss of central vision','Loss of peripheral (tunnel) vision and night blindness','Complete color blindness from birth','Double vision'],1,'RP typically starts with night blindness and narrowing peripheral vision.'),
      Q('Which learning disability primarily affects working with numbers?',['Dyslexia','Dysgraphia','Dyscalculia','Dyspraxia'],2,'Dyscalculia affects number sense and calculation.'),
      Q('The Marrakesh Treaty (2013) is designed to:',['Set web accessibility standards','Allow cross-border exchange of accessible-format books for people with print disabilities','Require captions on television','Regulate service animals'],1,'It creates copyright exceptions for accessible formats.'),
      Q('Section 508 of the Rehabilitation Act applies to:',['All private businesses','Federal agencies\' development, procurement, maintenance and use of ICT','State universities only','Telecom manufacturers only'],1,'It covers federal ICT.'),
      Q('The CVAA (2010) primarily addresses:',['Employment discrimination','Advanced communications services and video programming','Building codes','Education'],1,'The 21st Century Communications and Video Accessibility Act.'),
      Q('Which AT presents on-screen text as braille that updates as the user moves?',['Screen magnifier','Refreshable braille display','Braille embosser','Switch device'],1,'An embosser prints braille on paper; a display updates dynamically.'),
      Q('Which statement best reflects the medical model of disability?',['Disability results from inaccessible environments','Disability is a problem of the individual to be diagnosed and treated','Disability is a human rights issue','Disability is a cultural identity'],1,'The medical model locates disability in the person.'),
      Q('ADA Title III applies to:',['Federal agencies','State and local governments','Public accommodations such as businesses open to the public','Telecommunications relay only'],2,'Title III covers public accommodations.'),
      Q('The AODA is legislation from:',['Australia','Ontario, Canada','Austria','Alabama, USA'],1,'Accessibility for Ontarians with Disabilities Act, 2005.'),
      Q('A company installs an accessibility overlay widget. Which is most accurate?',['The site is now WCAG conformant','An overlay does not by itself fix underlying code and content barriers','Overlays are required by the ADA','Overlays replace the need for testing'],1,'Underlying issues remain; overlays have also been criticized by disabled users.'),
      Q('Which condition involves seizures triggered by flashing light or patterns?',['Vestibular disorder','Photosensitive epilepsy','Aphasia','Tinnitus'],1,'WCAG 2.3 addresses flashing thresholds.'),
      Q('Aphasia primarily affects:',['Balance','Language comprehension and expression','Color perception','Fine motor control'],1,'Often caused by stroke or brain injury.'),
      Q('WCAG 2.0 was approved as which ISO standard?',['ISO 9241','ISO/IEC 40500:2012','ISO 14289-1','ISO 30071-1'],1,'ISO/IEC 40500:2012.'),
      Q('Writing "Deaf" with a capital D usually indicates:',['A severe hearing loss measurement','Membership in a cultural and linguistic community that uses sign language','Deafness from birth only','A medical diagnosis'],1,'Lowercase deaf often refers to the audiological condition.'),
      Q('What is the most effective first step in establishing an organizational accessibility program?',['Buy a scanning tool','Secure executive sponsorship and adopt a policy with a named standard','Fix the home page','Publish a VPAT'],1,'Sponsorship and policy make the rest sustainable.'),
    ]},
  { id:'practice-was', practice:true, title:'WAS Practice', exams:['WAS'],
    lede:'Web Accessibility Specialist: creating accessible web solutions, identifying issues and remediating them.',
    quiz:[
      Q('An image with alt="chart" conveys quarterly sales trends. What is wrong?',['Nothing, alt is present','The alt does not convey the information, failing 1.1.1','Charts must use title instead','Alt should be empty'],1,'Presence is not enough; the alternative must serve the same purpose.'),
      Q('<button aria-labelledby="t1" aria-label="Close">X</button> where #t1 contains "Dismiss". What is the accessible name?',['Close','X','Dismiss','Close Dismiss'],2,'aria-labelledby takes precedence over aria-label.'),
      Q('Choosing an option in a <select> immediately navigates to a new page. Which SC is at risk?',['3.2.1 On Focus','3.2.2 On Input','2.4.2 Page Titled','1.4.1 Use of Color'],1,'Changing a setting must not cause an unexpected change of context.'),
      Q('What role must the direct children of role="tablist" have?',['menuitem','tab','option','listitem'],1,'tablist owns tab elements.'),
      Q('What is aria-describedby used for?',['Providing the accessible name','Adding supplementary description text','Hiding content','Setting the landmark type'],1,'Descriptions are read after the name and role.'),
      Q('The minimum contrast for a custom focus indicator against adjacent colors under 1.4.11 is:',['2:1','3:1','4.5:1','7:1'],1,'Non-text contrast applies to focus indicators.'),
      Q('Every page on a site has the <title> "Home". Which SC fails?',['2.4.2 Page Titled','2.4.4 Link Purpose','3.1.1 Language of Page','1.3.1 Info and Relationships'],0,'Titles must describe each page\'s topic or purpose.'),
      Q('Which CSS approach hides text visually but keeps it available to screen readers?',['display: none','visibility: hidden','A visually-hidden class using clip and 1px dimensions','opacity: 0 with pointer-events: none on a focusable element'],2,'display:none and visibility:hidden hide content from AT too.'),
      Q('After a single-page app route change, the best practice is to:',['Do nothing','Update document.title and move focus to the new main heading or announce the page','Reload the browser','Scroll to the footer'],1,'This tells AT users the view has changed.'),
      Q('Repeated navigation appears in a different order on each page. Which SC fails?',['3.2.3 Consistent Navigation','3.2.4 Consistent Identification','2.4.5 Multiple Ways','1.3.2 Meaningful Sequence'],0,'Repeated navigation must stay in the same relative order.'),
      Q('How should the current page be marked in a navigation list?',['aria-selected="true"','aria-current="page"','aria-checked="true"','class="active" only'],1,'aria-current="page" is announced as "current page".'),
      Q('How is an <iframe> given an accessible name?',['alt attribute','title attribute','name attribute','longdesc'],1,'A descriptive title names the frame.'),
      Q('What level is 2.5.3 Label in Name?',['A','AA','AAA','Not in WCAG'],0,'It was added in WCAG 2.1 at Level A.'),
      Q('You find three issues. Which should be fixed first?',['A AAA contrast issue on the footer','A Level A keyboard failure that blocks checkout','A redundant title attribute','A decorative image with a long alt'],1,'Prioritize by user impact and blocking severity.'),
      Q('A custom checkbox built from a <div> needs which role and state?',['role="button", aria-pressed','role="checkbox", aria-checked','role="option", aria-selected','role="switch" only'],1,'Plus tabindex="0" and Space to toggle.'),
      Q('Which of these fails 2.4.1 Bypass Blocks on a page with long repeated navigation?',['A skip link to main content','Proper landmarks','No skip link, no headings and no landmarks','Heading structure only'],2,'Any sufficient mechanism (skip link, landmarks, headings) can meet it.'),
    ]},
  { id:'practice-ads', practice:true, title:'ADS Practice', exams:['ADS'],
    lede:'Accessible Document Specialist: creating, remediating, auditing and planning for accessible documents.',
    quiz:[
      Q('In Acrobat Pro, which panel shows and edits a PDF\'s logical structure?',['Pages panel','Tags panel','Bookmarks panel','Layers panel'],1,'The Tags panel shows the tag tree.'),
      Q('How is a bulleted list correctly tagged in PDF?',['<P> for each item','<L> containing <LI>, each with <Lbl> and <LBody>','<Table> with one column','<Span> with bullets'],1,'This structure lets AT announce list length and position.'),
      Q('How do you make a PDF show its title, not its file name, in the title bar?',['Rename the file','Set the Title in Document Properties and set Initial View to show Document Title','Add an H1','Add a bookmark'],1,'Both steps are needed.'),
      Q('Where is a figure\'s alternate text stored in a tagged PDF?',['In a bookmark','In the Alt attribute of the <Figure> tag','In the file name','In the page label'],1,'Figure tags carry Alt text.'),
      Q('In Word, the best way to add extra space before a paragraph is:',['Press Enter several times','Set Space Before in paragraph formatting or the style','Insert a blank table','Add spaces'],1,'Empty paragraphs are announced as "blank".'),
      Q('What quick test shows that a PDF is image-only (scanned)?',['It has bookmarks','You cannot select or search the text','It has a title','It is larger than 1 MB'],1,'Image-only PDFs need OCR.'),
      Q('What provides the accessible name of a PDF form field?',['The field\'s tooltip','The field\'s color','The page number','The export value'],0,'Acrobat uses the tooltip (TU entry) as the name.'),
      Q('A Spanish quotation appears in an English Word document. What should you do?',['Nothing','Set the language of that text to Spanish (Review, Language)','Italicize it','Put it in a text box'],1,'This carries through as a Lang attribute in PDF.'),
      Q('A PDF table has two levels of column headers. How should headers be associated?',['Scope only on the top row','Headers and IDs (for example via Acrobat\'s Table Editor)','Merge all header cells','Convert the table to an image'],1,'Complex tables need explicit header-to-cell associations.'),
      Q('How should a hyperlink be tagged in a PDF?',['<P> containing the URL','<Link> containing the link text and a Link-OBJR reference','<Figure>','<Artifact>'],1,'The OBJR ties the tag to the link annotation.'),
      Q('A decorative shape in PowerPoint should be:',['Given alt text "shape"','Marked as decorative','Grouped with the title','Deleted in all cases'],1,'Mark as decorative so AT skips it.'),
      Q('What contrast ratio should normal body text in a document meet for WCAG AA?',['3:1','4.5:1','7:1','2:1'],1,'The same thresholds apply to documents as to web content.'),
      Q('Which tool checks a PDF against PDF/UA using the Matterhorn Protocol and also offers a screen reader preview?',['PAC','WAVE','ANDI','Ace by DAISY'],0,'PAC includes a structure-based screen reader preview.'),
      Q('When converting Word to PDF, which option must be enabled to keep structure?',['Optimize for minimum size','Document structure tags for accessibility','ISO 19005-1 (PDF/A) only','Print to PDF'],1,'Without tags the PDF loses its structure.'),
      Q('Which belongs in a document accessibility training plan for authors?',['Only a one-time PDF remediation workshop','Role-based training on authoring in source files, checkers and templates','Training only for IT staff','A single policy email'],1,'Most document issues are prevented at authoring time.'),
      Q('An organization publishes 500 legacy PDFs a year. Which is the best long-term strategy?',['Remediate every PDF by hand forever','Build accessible templates and train authors, remediate high-use legacy files, and publish HTML where possible','Stop publishing','Rely on an automated fix tool'],1,'Prevention at source plus prioritized remediation scales.'),
    ]},
  ]};


export const ALL_MODULES = [...MODULES, PRACTICE];

/** Every section in reading order, each tagged with its parent module. */
export const FLAT = ALL_MODULES.flatMap((m) => m.sections.map((s) => ({ ...s, mod: m })));

export const findSection = (id) => FLAT.find((s) => s.id === id);
export const findModule = (id) => ALL_MODULES.find((m) => m.id === id);

export const EXAMS = [
  { code:'CPACC', name:'Certified Professional in Accessibility Core Competencies', path:'#practice-cpacc',
    weights:[['40%','Disabilities, challenges and assistive technologies'],['20%','Accessibility and universal design'],['40%','Standards, laws and management strategies']],
    study:'Foundations, Program & Service, plus the WCAG overview.' },
  { code:'WAS', name:'Web Accessibility Specialist', path:'#practice-was',
    weights:[['40%','Creating accessible web solutions'],['40%','Identifying accessibility issues'],['20%','Remediating accessibility issues']],
    study:'Web Development, Mobile Apps and Testing & QA.' },
  { code:'ADS', name:'Accessible Document Specialist', path:'#practice-ads',
    weights:[['25%','Creating electronic documents'],['25%','Remediating electronic documents'],['25%','Auditing and testing document accessibility'],['15%','Planning and training'],['10%','Policy promotion, advocacy and advising']],
    study:'Documents & PDF, Testing & QA, and Program Management.' },
];

