export const tabs = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing', 'Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography', 'Productivity', 'Web Development', 'Data Science', 'Cooking'];

const base = { author: 'purepearl studio', lessons: 17, duration: '2 hours 16 mins', comments: 59, level: 'Beginner', price: 25, rating: 4.5 };
export const courses = [
  { ...base, id: 1, title: 'Learn Figma from Basic', tone: 0 },
  { ...base, id: 2, title: 'Build Digital Asset', tone: 1 },
  { ...base, id: 3, title: 'the Power of Big Data', tone: 2 },
  { ...base, id: 4, title: 'Balancing Productivity and Self-Care', tone: 3 },
  { ...base, id: 5, title: 'Mastering Money Management', tone: 4 },
  { ...base, id: 6, title: 'From Idea to Startup Success', tone: 5 },
];

export const testimonials = [
  { name: 'Sarah M.', role: 'Enthusiastic Learner', quote: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."' },
  { name: 'James L.', role: 'Lifelong Learner', quote: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."' },
  { name: 'Alex B.', role: 'Inspired Creator', quote: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."' },
];

export const footerLinks = [
  ['Browse', ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design']],
  ['', ['Development', 'Marketing', 'Photography', 'Finance', 'Sport']],
  ['Platform', ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About']],
];
