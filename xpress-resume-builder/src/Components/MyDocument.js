import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Import your Times New Roman font
// import timesFont from './path/to/times.ttf';
import timesFont from '../fonts/times new roman bold.ttf';
import timesNormalFont from '../fonts/times new roman.ttf';

// Register the font with React PDF
Font.register({ family: 'Times New Roman', src: timesNormalFont });
Font.register({ family: 'Times New Roman Bold', src: timesFont });

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        border: '1 solid black', // Border style
        padding:40,
        display: 'flex',
        flexDirection: 'column',
    },

    name: {
        fontFamily: 'Times New Roman Bold', // Use the custom Times New Roman font
        fontSize: 18,
        fontWeight: 'bold', // Adjust fontWeight as needed
        textAlign: 'center',
        width: '100%'
    },
    title: {
        fontFamily: 'Times New Roman Bold', // Use the custom Times New Roman font
        fontSize: 11,
        fontWeight: 'bold', // Adjust fontWeight as needed
        textAlign: 'center',
        width: '100%',
        marginVertical: 6
    },
    content: {
        fontFamily: 'Times New Roman Bold', // Use the custom Times New Roman font
        fontSize: 11,
        fontWeight: 'bold',
        marginVertical: 2
    },
    horizontalLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginVertical: 10,
    },
    smallContent: {
        fontFamily: 'Times New Roman', // Use the custom Times New Roman font
        fontSize: 11,
        marginVertical: 2
    }
});
const education_details = [
    {
        name: "DVR & Dr. HS MIC College of Technology",
        place: "Kanchikacherla",
        year: "2021 - 2025*",
        course: "Bachelor of Technology",
        branch: "Computer Science and Engineering",
        grade: "Aggregate: 9.2/10"
    },
    {
        name: "DVR & Dr. HS MIC College of Technology",
        place: "Kanchikacherla",
        year: "2021 - 2025*",
        course: "Bachelor of Technology",
        branch: "Computer Science and Engineering",
        grade: "Aggregate: 9.2/10"
    },
    {
        name: "DVR & Dr. HS MIC College of Technology",
        place: "Kanchikacherla",
        year: "2021 - 2025*",
        course: "Bachelor of Technology",
        branch: "Computer Science and Engineering",
        grade: "Aggregate: 9.2/10"
    },
]
const project_details = [
    {
        name: "Xpress Resume Builder: Simplified Web Application for Building and Downloading Resume",
        year:"July-2024",
        lines: [
            "Developed a web application that collects user inputs necessary for creating a resume and generates a standard resume, providing a download option directly on the website",
            "Utilized technologies including HTML, CSS, React.js, MongoDB, Python, and Flask framework, along with the Report Lab library",
            "Implemented features such as user registration, login, resume building, and a download option for the completed resume."
        ]
    }
]
const work_details = [
    {
        name: "Xpress Resume Builder: Simplified Web Application for Building and Downloading Resume",
        year:"July-2024",
        lines: [
            "Developed a web application that collects user inputs necessary for creating a resume and generates a standard resume, providing a download option directly on the website",
            "Utilized technologies including HTML, CSS, React.js, MongoDB, Python, and Flask framework, along with the Report Lab library",
            "Implemented features such as user registration, login, resume building, and a download option for the completed resume."
        ]
    }
]
const skills = [
    {
        heading:"Programming Languages",
        content:"Java, Python, C",
    },
    {
        heading:"Technologies",
        content:"HTML, CSS, JavaScript, React .Js",
    },
    {
        heading:"Database",
        content:"MySQL, MongoDB",
    },
    {
        heading:"Tools",
        content:"Visual Studio Code, Eclipse, Git & GitHub, Jupyter Notebook",
    }
]
const certifications = [
      {
        name:"React JS Certification from Infosys Springboard",
        year:"April - 2024"
      },
      {
        name:"Introduction to Web Design and Development from LinkedIn Learning",
        year:"January - 2024"
      },
      {
        name:"Java Programming from Great Learning",
        year:"August - 2022"
      },

]  
const internships = [
    {
      name:"React JS Certification from Infosys Springboard",
      year:"April - 2024"
    },
    {
      name:"Introduction to Web Design and Development from LinkedIn Learning",
      year:"January - 2024"
    },
    {
      name:"Java Programming from Great Learning",
      year:"August - 2022"
    },
]  
const curricular = [
    "React JS Certification from Infosys Springboard",
    "Introduction to Web Design and Development from LinkedIn Learning"
]  
const achievements = [
    {
      name:"React JS Certification from Infosys Springboard",
      year:"April - 2024"
    },
    {
      name:"Introduction to Web Design and Development from LinkedIn Learning",
      year:"January - 2024"
    },
    {
      name:"Java Programming from Great Learning",
      year:"August - 2022"
    },

]  
const strengths = [
    "React JS Certification from Infosys Springboard",
    "Introduction to Web Design and Development from LinkedIn Learning"
]  
const hobbies = [
    "React JS Certification from Infosys Springboard",
    "Introduction to Web Design and Development from LinkedIn Learning"
]  
const declaration=
    {
        content: "DVR & Dr. HS MIC College of Technology",
        date: "Kanchikacherla",
        place: "2021 - 2025*",
        name: "Bachelor of Technology",
    }

const MyDocument = ({pInfo, cob}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View>
                <Text style={styles.name}>{pInfo.name}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', margin: '2px' }}>
                <Text style={styles.content}>{pInfo.email}</Text>
                <Text style={styles.content}>{pInfo.phone}</Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View>
                <Text style={styles.title}>CAREER OBJECTIVE</Text>
                <Text style={styles.smallContent}>{cob}</Text>
            </View>
            <View>
                <Text style={styles.title}>EDUCATION</Text>
                {
                    education_details?.map((ed, index) => (
                        <View style={{ marginBottom: 6 }} index={index}>
                            <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text style={styles.content}>{ed.name},</Text>
                                    <Text style={styles.smallContent}> {ed.place}</Text>
                                </View>
                                <Text style={styles.content}>{ed.year}</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <Text style={styles.content}>{ed.course},</Text>
                                    <Text style={styles.smallContent}> {ed.branch}</Text>
                                </View>
                                <Text style={styles.smallContent}>{ed.grade}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
            
            <View>
            <Text style={styles.title}>WORK EXPERIENCE</Text>
            {
                    work_details?.map((pd, ind) => (

                        pd.name != "" || pd.name != undefined ?<View>
                            <View index={ind} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text  style={styles.content}>{pd.name}</Text>
                                <Text  style={styles.content}>{pd.year}</Text>
                            </View>
                            <View>
                                {
                                    pd.lines?.map((li, inde) => (
                                        li != "" ?
                                            <View index={inde} style={{display:'flex', flexDirection:'row'}}>
                                                <Text>•  </Text>
                                                <Text style={styles.smallContent}>{li}</Text>
                                            </View> : null

                                    ))
                                }
                            </View>
                        </View> : null
                    ))
                }
            </View>
            <View>
                <Text style={styles.title}>PROJECT EXPERIENCE</Text>
                {
                    project_details?.map((pd, ind) => (

                        pd.name != "" || pd.name != undefined ?<View>
                            <View index={ind} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text  style={styles.content}>{pd.name}</Text>
                                <Text  style={styles.content}>{pd.year}</Text>
                            </View>
                            <View>
                                {
                                    pd.lines?.map((li, inde) => (
                                        li != "" ?
                                            <View index={inde} style={{display:'flex', flexDirection:'row'}}>
                                                <Text>•  </Text>
                                                <Text style={styles.smallContent}>{li}</Text>
                                            </View> : null

                                    ))
                                }
                            </View>


                        </View> : null
                    ))
                }

            </View>
            <View>
            <Text style={styles.title}>TECHNICAL SKILLS</Text>
            {
                skills?.map((sk,index)=>(
                    <View  index={index} style={{display:'flex', flexDirection:'row'}}>
                        <Text style={styles.content}>{sk.heading}: </Text>
                        <Text style={styles.smallContent}>{sk.content}</Text>
                    </View>
                    


                ))
            }
            </View>
            <View>
            <Text style={styles.title}>CERTIFICATIONS</Text>
            {
                certifications?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct.name}</Text></View>
                    <Text style={styles.content}>{ct.year}</Text>
                </View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>INTERNSHIPS</Text>
            {
                internships?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct.name}</Text></View>
                    <Text style={styles.content}>{ct.year}</Text>
                </View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>ACHIEVEMENTS</Text>
            {
                achievements?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct.name}</Text></View>
                    <Text style={styles.content}>{ct.year}</Text>
                </View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>CURRICULAR ACTIVITIES</Text>
            {
                curricular?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct}</Text></View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>STRENGTHS</Text>
            {
                strengths?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct}</Text></View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>HOBBIES</Text>
            {
                hobbies?.map((ct,index)=>(
                    <View index={index} style={{display:'flex', flexDirection:'row', }}><Text>•  </Text>
                    <Text style={styles.smallContent}>{ct}</Text></View>
                ))
            }
            </View>
            <View>
            <Text style={styles.title}>DECLARATION</Text>
            <View style={{marginVertical:4}}>
            <Text style={styles.smallContent}>{declaration.content}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', }}>
                <Text style={styles.content}>Place: </Text>
                <Text style={styles.smallContent}>{declaration.place}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={styles.content}>Date: </Text>
                <Text style={styles.smallContent}>{declaration.date}</Text>
            </View>
            <Text style={styles.content}>{declaration.name}</Text>
            </View>
            
            </View>
        </Page>
    </Document>
);

export default MyDocument;
