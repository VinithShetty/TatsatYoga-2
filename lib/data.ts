export interface YogaClass {
  name: string;
  desc: string;
  level: string;
  duration: string;
  format: string;
  slotId: string;
}

export interface ScheduleRow {
  day: string;
  date: string;
  time: string;
  class: string;
  level: string;
  location: string;
  status: 'available' | 'almost-full' | 'full';
}

export const teacher = {
  name: 'My Story',
  quote: "I don't think I chose yoga. I think yoga chose me.",
  story:
    'My journey began not as a carefully planned destination, but as a quiet unfolding. What started as a practice slowly became a way of understanding myself \u2014 my body, my breath, my thoughts, and the spaces in between.',
  credentials:
    'I am a 300-hour certified yoga teacher, trained at Vinyasa Yogashram, Rishikesh, with several years of experience teaching yoga. My practice and teaching draw from Hatha, Vinyasa and Yin Yoga, bringing together movement, breath, stillness and awareness.',
  teaching:
    'At the heart of my teaching is a simple belief: yoga is not about perfect postures; it is about coming home to yourself. It is a practice of listening rather than forcing, of building strength while learning softness, and of creating a deeper connection between body and mind.',
  approach:
    'My classes are beginner-friendly and thoughtfully adapted to individual needs \u2014 whether your intention is to build strength and flexibility, support weight management, improve focus, manage stress, or simply create a little more balance in everyday life.',
};

export const classesData: YogaClass[] = [
  { name: 'Hatha Yoga', desc: 'A traditional and mindful approach to yoga that combines asana, breath and awareness. Hatha builds strength, stability, flexibility and body awareness while creating a steady, grounded practice.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-hatha' },
  { name: 'Vinyasa Yoga', desc: 'A dynamic, flowing practice where movement and breath move together. Vinyasa builds strength, mobility, balance and stamina while creating a moving meditation through mindful sequences.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-vinyasa' },
  { name: 'Yin Yoga', desc: 'A slow, meditative practice focused on deep relaxation, mobility and releasing tension. Postures are held for longer periods, allowing the body to gently open while cultivating patience, stillness and awareness.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-yin' },
  { name: 'Pranayama (Breathwork)', desc: 'Conscious breathing practices that help develop breath awareness, nervous-system regulation and mental clarity. Suitable techniques are incorporated to support relaxation, focus, energy and emotional balance.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-pranayama' },
  { name: 'Meditation', desc: 'Guided practices that encourage stillness, presence and inner awareness, helping create greater calm and clarity in everyday life.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-meditation' },
  { name: 'Strength & Flexibility Training', desc: 'Yoga-based movement and functional strength practices are designed to improve muscular strength, joint mobility, flexibility, balance and overall physical resilience.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-strength' },
  { name: 'Movement for a Sedentary Lifestyle', desc: 'Targeted practices to counter the effects of prolonged sitting and inactivity, with a focus on common concerns such as back pain, neck discomfort, shoulder stiffness, tight hips and restricted mobility.', level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-sedentary' },
  { name: "Women's Health & Hormonal Wellness", desc: "Gentle, supportive practices designed to promote movement, relaxation and body awareness through different stages of a woman's life, with a focus on supporting overall wellbeing and hormonal balance.", level: 'All Levels', duration: '60 min', format: 'Online', slotId: 'cls-womens' },
  { name: 'Senior Citizens Chair Yoga', desc: 'A gentle, accessible practice designed to improve mobility, balance, flexibility and strength while promoting relaxation and overall well-being. The session uses a chair for support, making yoga safe and comfortable for seniors, including those with limited mobility or difficulty getting down to the floor.', level: 'All Levels', duration: '30 min', format: 'Online', slotId: 'cls-senior' },
];

export const scheduleData: ScheduleRow[] = [
  { day: 'MON', date: 'Sep 7', time: '7:30 AM', class: 'Hatha Yoga', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'MON', date: 'Sep 7', time: '6:00 PM', class: 'Vinyasa Yoga', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'TUE', date: 'Sep 8', time: '9:00 AM', class: 'Yin Yoga', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'WED', date: 'Sep 9', time: '7:00 PM', class: 'Pranayama (Breathwork)', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'THU', date: 'Sep 10', time: '6:00 PM', class: 'Meditation', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'FRI', date: 'Sep 11', time: '8:00 AM', class: 'Strength & Flexibility Training', level: 'All Levels', location: 'Online', status: 'available' },
  { day: 'SAT', date: 'Sep 12', time: '10:00 AM', class: 'Senior Citizens Chair Yoga', level: 'All Levels', location: 'Online', status: 'available' },
];

export const bookingDatesData = ['Sun, Sep 7', 'Mon, Sep 8', 'Tue, Sep 9', 'Wed, Sep 10', 'Thu, Sep 11', 'Fri, Sep 12'];
export const bookingTimesData = ['7:30 AM', '9:00 AM', '12:00 PM', '6:00 PM', '7:30 PM'];

export const filterDefs = ['All', 'Hatha', 'Vinyasa', 'Yin', 'Pranayama', 'Meditation'];

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Classes', href: '/classes' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/contact' },
];

export const instaSlots = ['insta-1', 'insta-2', 'insta-3', 'insta-4', 'insta-5', 'insta-6'];
export const socials = [{ initial: 'IG' }, { initial: 'FB' }, { initial: 'WA' }];
export const contact = { phone: '(555) 019-2834', email: 'hello@tatsatyoga.com', location: 'Austin, TX' };
