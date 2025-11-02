// import eight from '../assets/svg/projects/eight.svg'
// import seven from '../assets/svg/projects/seven.svg'
// import six from '../assets/svg/projects/six.svg'
// import face from '../assets/png/face.jpg'
// import land from '../assets/png/land.jpg'
import TMS from '../assets/png/TMS.jpg'
import Farm from '../assets/png/Farm.png'
import linefollower from '../assets/png/linefollower.jpg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Grownect',
        projectDesc: 'A full-stack website to connect farmers directly with buyers for assured contract farming.',
        tags: ['React', 'JavaScript', 'CSS', 'HTML'],
        //code: 'https://github.com/srinivaspavan73/Secure-Access',
       // demo: 'https://github.com/srinivaspavan73/Secure-Access',
        image: Farm
    },
    {
        id: 2,
        projectName: 'Line Follower Robot',
        projectDesc: 'Developed a Line Follower Robot that accurately tracks a path with a 95% success rate.',
        tags: ['Arduino Uno', 'Embedded C++', 'IR Sensors', 'L293D Motor Driver'],
        code: 'https://github.com/Keerthana-LC/Line-Follower-Robot/blob/main/Line%20Follower.txt',
        demo: 'https://www.linkedin.com/posts/keerthana-lc-04aa44250_robotics-linefollower-certificate-activity-7311970786217508867-0Fd9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4XFzoBlT3cb5vFzo7Sb7xO5asvCdoLbgI',
        image: linefollower
    },
    {
        id: 3,
        projectName: 'Traffic Monitoring System',
        projectDesc: 'Designed a Smart Traffic Signal Monitoring System that reduced traffic congestion by 25% during peak hours.',
        tags: ['Arduino Uno', 'IR Sensors' , 'Ultrasonic Sensors' , 'LEDs'],
        code: 'https://github.com/Keerthana-LC/Traffic-Monitoring-System./blob/main/ultrasonic_led.ino',
        demo: 'https://github.com/Keerthana-LC/Traffic-Monitoring-System./blob/main/traffic%20monitoring%20system.jpg',
        image: TMS
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/