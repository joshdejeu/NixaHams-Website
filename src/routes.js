import Home from './pages/HomePage.vue';
import Nets from './pages/NetsPage.vue';
import Repeaters from './pages/RepeatersPage.vue';
import Meetings from './pages/MeetingPage.vue';
import Roster from './pages/RosterPage.vue';
import History from './pages/HistoryPage.vue';
import DMR from './pages/DMRPage.vue';
import Bylaw from './pages/BylawPage.vue';
import Officers from './pages/OfficersPage.vue';
import Donate from './pages/DonationPage.vue';
import Contact from './pages/ContactPage.vue';
import Invalid from './pages/InvalidPage.vue';

import Alpha from './pages/AlphaPage.vue';
import Success from './pages/SuccessPage.vue';
// import About from './pages/AboutPage.vue';

export default[
    { path: '/', component: Home},
    { path: '/nets', component: Nets},
    { path: '/repeaters', component: Repeaters},
    { path: '/meetings', component: Meetings},
    { path: '/roster', component: Roster},
    { path: '/history', component: History},
    { path: '/dmr', component: DMR},
    { path: '/bylaws', component: Bylaw},
    { path: '/officers', component: Officers},
    { path: '/donate', component: Donate},
    { path: '/contact', component: Contact},
    { path: '*', component: Invalid},
    
    { path: '/alpha', component: Alpha},
    { path: '/success', component: Success},
    // { path: '/about', component: About},
];