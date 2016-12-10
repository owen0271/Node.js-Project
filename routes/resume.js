/**
 * Created by owen0271 on 2016/12/6.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('resume', {
        pageData: {
            nav_list: [
                {nv_title: 'Home', page: '/'},
                {nv_title: 'Gallery', page: '/resume/gallery'},
                {nv_title: 'Contact', page: '/resume/contact'}
            ],
            summery_list: [
                'Master of Applied Science (Electrical and Computer Engineering)',
                'Bachelor of Engineering (Electrical Engineering major in Microelectronics)',
                'CO-OP work experience at BlackBerry (RIM)',
                'Knowledge of Computer Networking, Programming, Information Security, and Microelectronics',
                'Proficient with various programming languages (C/C++, Python, Java, Matlab, HTML, CSS)',
                'Self-motivated; team player; enjoy fast-paced environment; eager to learn',
                'Fluent in English and Mandarin'
            ],
            education: [
                {
                    edu_period: 'Master of Applied Science',
                    status: 'Graduated in Sep.2016',
                    institute: 'University of Ottawa',
                    major: 'Electrical and Computer Engineering',
                    research_area: 'Wireless Communication Security in WSNs and IoTs',
                    GPA: '3.78'
                },
                {
                    edu_period: 'Bachelor of Engineering',
                    status: 'Graduated in July.2012',
                    institute: 'Tianjin University',
                    major: 'Electrical and Computer Engineering',
                    research_area: 'Micro-electronics and Solid State Electronics',
                    GPA: '3.27'
                }
            ],
            working: [
                {
                    company: 'BlackBerry Limited',
                    location: 'Ottawa, Ontario, Canada',
                    working_period: "September 2015 - April 2016",
                    job_title: 'Radio Performance Student',
                    responsibilities: [
                        'Conducting various tests related to radio performance and collecting KPIs',
                        'Automation software programming (in Python) for different test cases or projects',
                        'Creating parsers for log parsing and analyzing (Python and Java)'
                    ],
                    achievement: [
                        'Finished assigned test automation projects',
                        'Got a better understanding of communication protocols and standards, such as LTE',
                        'Gained valuable experiences of programming',
                        'Hands on experiences with testing equipments and tools (i.e. Anritus signaling simulator, R&S CMW500, Iperf, Qualcomm software such as QXDM)',
                        'Learned how to work cooperatively on a project at enterprise level'
                    ]
                },
                {
                    company: 'University of Ottawa',
                    location: 'Ottawa, Ontario, Canada',
                    working_period: "September 2015 - April 2016",
                    job_title: 'Research Assistant',
                    responsibilities: [
                        'Designing energy efficient schemes of secret sharing and key management',
                        'Simulating proposed schemes in C for application in WSNs and IoTs'
                    ],
                    achievement: []
                },
                {
                    company: 'University of Ottawa',
                    location: 'Ottawa, Ontario, Canada',
                    working_period: "September 2015 - April 2016",
                    job_title: 'Teaching Assistant',
                    responsibilities: [
                        'Correcting and marking students’ assignments and lab reports',
                        'Monitoring and tutoring labs',
                        'Evaluate the final reports and presentations of the student projects'
                    ],
                    achievement: []
                }
            ],
            project: [
                {
                    project_name: 'Industrial IoT Application',
                    institution: '',
                    status: '(Current)',
                    starting_date: 'September 2016',
                    responsibility: [
                        'Adding security features such as basic symmetric encryption method',
                        'Implementing key management protocol'
                    ]
                }
            ],
            publication: [
                {
                    paper_title: 'Decentralized CRT-Based Efficient Verifiable (n,t,n) Multi-Secret Sharing Scheme',
                    Motivation: 'Design efficient and computationally secure scheme for secret sharing purpose'
                },
                {
                    paper_title: 'Energy Efficient Secure Key Management Schemes for WSNs and IoT',
                    Motivation: 'Design more energy efficient key agreement schemes for Internet of Things and WSNs'
                }
            ]
        },
        title: "Wen Wen's Personal Site"
    });
});

module.exports = router;