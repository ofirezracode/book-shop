const BOOKS = [
  {
    name: 'Planning Extreme Programming',
    description:
      'Without careful ongoing planning, the software development process can fall apart. Extreme Programming (XP) is a new programming discipline, or methodology, that is geared toward the way that the vast majority of software development projects are handled -- in small teams. In this new book, noted software engineers Kent Beck and Martin Fowler show the reader how to properly plan a software development project with XP in mind. The authors lay out a proven strategy that forces the reader to plan as their software project unfolds, and therefore avoid many of the nasty problems that can potentially spring up along the way.',
    imgUrl: 'http://books.google.com/books/content?id=u13hVoYVZa8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Programming from the Ground Up',
    description:
      'Programming from the Ground Up uses Linux assembly language to teach new programmers the most important concepts in programming. It takes you a step at a time through these concepts: * How the processor views memory * How the processor operates * How programs interact with the operating system * How computers represent data internally * How to do low-level and high-level optimization Most beginning-level programming books attempt to shield the reader from how their computer really works. Programming from the Ground Up starts by teaching how the computer works under the hood, so that the programmer will have a sufficient background to be successful in all areas of programming. This book is being used by Princeton University in their COS 217 "Introduction to Programming Systems" course.',
    imgUrl: 'http://books.google.com/books/content?id=w4Lo8LmQe3MC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'Practical C++ Programming',
    description:
      'Teaches the programming language, covering topics including syntax, coding standards, object classes, templates, debugging, and the C++ preprocessor.',
    imgUrl: 'http://books.google.com/books/content?id=pXDzdJ_1E3oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  { name: 'מבני נתונים ומבוא לאלגוריתמים' },
  {
    name: 'Python Programming',
    description: '"Introduces computer programming using the Python programming language"--Provided by publisher.',
    imgUrl: 'http://books.google.com/books/content?id=BOyCSAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'Data Science Programming All-in-One For Dummies',
    description:
      'Your logical, linear guide to the fundamentals of data science programming Data science is exploding—in a good way—with a forecast of 1.7 megabytes of new information created every second for each human being on the planet by 2020 and 11.5 million job openings by 2026. It clearly pays dividends to be in the know. This friendly guide charts a path through the fundamentals of data science and then delves into the actual work: linear regression, logical regression, machine learning, neural networks, recommender engines, and cross-validation of models. Data Science Programming All-In-One For Dummies is a compilation of the key data science, machine learning, and deep learning programming languages: Python and R. It helps you decide which programming languages are best for specific data science needs. It also gives you the guidelines to build your own projects to solve problems in real time. Get grounded: the ideal start for new data professionals What lies ahead: learn about specific areas that data is transforming Be meaningful: find out how to tell your data story See clearly: pick up the art of visualization Whether you’re a beginning student or already mid-career, get your copy now and add even more meaning to your life—and everyone else’s!',
    imgUrl: 'http://books.google.com/books/content?id=2kLADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Programming the Universe',
    description:
      'Is the universe actually a giant quantum computer? According to Seth Lloyd, the answer is yes. All interactions between particles in the universe, Lloyd explains, convey not only energy but also information–in other words, particles not only collide, they compute. What is the entire universe computing, ultimately? “Its own dynamical evolution,” he says. “As the computation proceeds, reality unfolds.” Programming the Universe, a wonderfully accessible book, presents an original and compelling vision of reality, revealing our world in an entirely new light.',
    imgUrl: 'http://books.google.com/books/content?id=yW-PEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'The Way to Go',
    description:
      "This book provides the reader with a comprehensive overview of the new open source programming language Go (in its first stable and maintained release Go 1) from Google. The language is devised with Java / C#-like syntax so as to feel familiar to the bulk of programmers today, but Go code is much cleaner and simpler to read, thus increasing the productivity of developers. You will see how Go: simplifies programming with slices, maps, structs and interfaces incorporates functional programming makes error-handling easy and secure simplifies concurrent and parallel programming with goroutines and channels And you will learn how to: make use of Go's excellent standard library program Go the idiomatic way using patterns and best practices in over 225 working examples and 135 exercises This book focuses on the aspects that the reader needs to take part in the coming software revolution using Go.",
    imgUrl: 'http://books.google.com/books/content?id=Sxss1kQxfP0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Handbook of Constraint Programming',
    description:
      'Constraint programming is a powerful paradigm for solving combinatorial search problems that draws on a wide range of techniques from artificial intelligence, computer science, databases, programming languages, and operations research. Constraint programming is currently applied with success to many domains, such as scheduling, planning, vehicle routing, configuration, networks, and bioinformatics. The aim of this handbook is to capture the full breadth and depth of the constraint programming field and to be encyclopedic in its scope and coverage. While there are several excellent books on constraint programming, such books necessarily focus on the main notions and techniques and cannot cover also extensions, applications, and languages. The handbook gives a reasonably complete coverage of all these lines of work, based on constraint programming, so that a reader can have a rather precise idea of the whole field and its potential. Of course each line of work is dealt with in a survey-like style, where some details may be neglected in favor of coverage. However, the extensive bibliography of each chapter will help the interested readers to find suitable sources for the missing details. Each chapter of the handbook is intended to be a self-contained survey of a topic, and is written by one or more authors who are leading researchers in the area. The intended audience of the handbook is researchers, graduate students, higher-year undergraduates and practitioners who wish to learn about the state-of-the-art in constraint programming. No prior knowledge about the field is necessary to be able to read the chapters and gather useful knowledge. Researchers from other fields should find in this handbook an effective way to learn about constraint programming and to possibly use some of the constraint programming concepts and techniques in their work, thus providing a means for a fruitful cross-fertilization among different research areas. The handbook is organized in two parts. The first part covers the basic foundations of constraint programming, including the history, the notion of constraint propagation, basic search methods, global constraints, tractability and computational complexity, and important issues in modeling a problem as a constraint problem. The second part covers constraint languages and solver, several useful extensions to the basic framework (such as interval constraints, structured domains, and distributed CSPs), and successful application areas for constraint programming. - Covers the whole field of constraint programming - Survey-style chapters - Five chapters on applications',
    imgUrl: 'http://books.google.com/books/content?id=Kjap9ZWcKOoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Beginning Rust Programming',
    description:
      'Quickly learn the ropes with the Rust programming language using this practical, step-by-step guide In Beginning Rust Programming, accomplished programmer and author Ric Messier delivers a highly practical, real-world guide to coding with Rust. Avoiding dry, theoretical content and “Hello, world”-type tutorials of questionable utility, the book dives immediately into functional Rust programming that takes advantage of the language’s blazing speed and memory efficiency. Designed from the ground up to give you a running start to using the multiparadigm system programming language, this book will teach you to: Solve real-world computer science problems of practical importance Use Rust’s rich type system and ownership model to guarantee memory-safety and thread-safety Integrate Rust with other programming languages and use it for embedded devices Perfect for programmers with some experience in other languages, like C or C++, Beginning Rust Programming is also a great pick for students new to programming and seeking a user-friendly and robust language with which to start their coding career.',
    imgUrl: 'http://books.google.com/books/content?id=OJwXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Coding as a Playground',
    description:
      'Coding as a Playground, Second Edition is the first book to focus on how young children (ages 7 and under) can engage in computational thinking and be taught to become computer programmers, a process that can increase both their cognitive and social-emotional skills. Learn how coding can engage children as producers--and not merely consumers--of technology in a playful way. You will come away from this groundbreaking work with an understanding of how coding promotes developmentally appropriate experiences such as problem solving, imagination, cognitive challenges, social interactions, motor skills development, emotional exploration, and making different choices. Featuring all new case studies, vignettes and projects, as well as an expanded focus on teaching coding as a new literacy, this second edition helps you learn how to integrate coding into different curricular areas to promote literacy, math, science, engineering, and the arts through a project-based approach and a positive approach to learning.',
    imgUrl: 'http://books.google.com/books/content?id=v4SGzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'Learn to Code by Solving Problems',
    description:
      'Learn to Code by Solving Problems is a practical introduction to programming using Python. It uses coding-competition challenges to teach you the mechanics of coding and how to think like a savvy programmer. Computers are capable of solving almost any problem when given the right instructions. That’s where programming comes in. This beginner’s book will have you writing Python programs right away. You’ll solve interesting problems drawn from real coding competitions and build your programming skills as you go. Every chapter presents problems from coding challenge websites, where online judges test your solutions and provide targeted feedback. As you practice using core Python features, functions, and techniques, you’ll develop a clear understanding of data structures, algorithms, and other programming basics. Bonus exercises invite you to explore new concepts on your own, and multiple-choice questions encourage you to think about how each piece of code works. You’ll learn how to: • Run Python code, work with strings, and use variables • Write programs that make decisions • Make code more efficient with while and for loops • Use Python sets, lists, and dictionaries to organize, sort, and search data • Design programs using functions and top-down design • Create complete-search algorithms and use Big O notation to design more efficient code By the end of the book, you’ll not only be proficient in Python, but you’ll also understand how to think through problems and tackle them with code. Programming languages come and go, but this book gives you the lasting foundation you need to start thinking like a programmer.',
    imgUrl: 'http://books.google.com/books/content?id=Wo4TEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Expert Python Programming',
    description:
      'Gain a deep understanding of building, maintaining, packaging, and shipping robust Python applications Key FeaturesDiscover the new features of Python, such as dictionary merge, the zoneinfo module, and structural pattern matchingCreate manageable code to run in various environments with different sets of dependenciesImplement effective Python data structures and algorithms to write, test, and optimize codeBook Description This new edition of Expert Python Programming provides you with a thorough understanding of the process of building and maintaining Python apps. Complete with best practices, useful tools, and standards implemented by professional Python developers, this fourth edition has been extensively updated. Throughout this book, you’ll get acquainted with the latest Python improvements, syntax elements, and interesting tools to boost your development efficiency. The initial few chapters will allow experienced programmers coming from different languages to transition to the Python ecosystem. You will explore common software design patterns and various programming methodologies, such as event-driven programming, concurrency, and metaprogramming. You will also go through complex code examples and try to solve meaningful problems by bridging Python with C and C++, writing extensions that benefit from the strengths of multiple languages. Finally, you will understand the complete lifetime of any application after it goes live, including packaging and testing automation. By the end of this book, you will have gained actionable Python programming insights that will help you effectively solve challenging problems. What you will learnExplore modern ways of setting up repeatable and consistent Python development environmentsEffectively package Python code for community and production useLearn modern syntax elements of Python programming, such as f-strings, enums, and lambda functionsDemystify metaprogramming in Python with metaclassesWrite concurrent code in PythonExtend and integrate Python with code written in C and C++Who this book is for The Python programming book is intended for expert programmers who want to learn Python’s advanced-level concepts and latest features. Anyone who has basic Python skills should be able to follow the content of the book, although it might require some additional effort from less experienced programmers. It should also be a good introduction to Python 3.9 for those who are still a bit behind and continue to use other older versions.',
    imgUrl: 'http://books.google.com/books/content?id=2tAwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Core Python Programming',
    description:
      'A quick guide to everything anyone would want to know about the soaringly popular Internet programming language, Python. Software architect Chun provides an introduction to new features introduced in Python 1.6, and topics covered include regular expressions, extending Python, and OOP. The CD-ROM includes the source code for all of the examples in the text.',
    imgUrl: 'http://books.google.com/books/content?id=hLazngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'BASIC Programming',
    description: 'This is the standard reference for both novice and professional PC BASIC programmers. Companion disk included.',
    imgUrl: 'http://books.google.com/books/content?id=KAMYAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  },
  {
    name: 'Learning Processing',
    description:
      'The free, open-source Processing programming language environment was created at MIT for people who want to develop images, animation, and sound. Based on the ubiquitous Java, it provides an alternative to daunting languages and expensive proprietary software. This book gives graphic designers, artists and illustrators of all stripes a jump start to working with processing by providing detailed information on the basic principles of programming with the language, followed by careful, step-by-step explanations of select advanced techniques. The author teaches computer graphics at NYU\'s Tisch School of the Arts, and his book has been developed with a supportive learning experience at its core. From algorithms and data mining to rendering and debugging, it teaches object-oriented programming from the ground up within the fascinating context of interactive visual media. Previously announced as "Pixels, Patterns, and Processing" *A guided journey from the very basics of computer programming through to creating custom interactive 3D graphics *Step-by-step examples, approachable language, exercises, and LOTS of sample code support the reader\'s learning curve *Includes lessons on how to program live video, animated images and interactive sound',
    imgUrl: 'http://books.google.com/books/content?id=yrR1YoiM2EAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'The Art of Multiprocessor Programming, Revised Reprint',
    description:
      'Revised and updated with improvements conceived in parallel programming courses, The Art of Multiprocessor Programming is an authoritative guide to multicore programming. It introduces a higher level set of software development skills than that needed for efficient single-core programming. This book provides comprehensive coverage of the new principles, algorithms, and tools necessary for effective multiprocessor programming. Students and professionals alike will benefit from thorough coverage of key multiprocessor programming issues. This revised edition incorporates much-demanded updates throughout the book, based on feedback and corrections reported from classrooms since 2008 Learn the fundamentals of programming multiple threads accessing shared memory Explore mainstream concurrent data structures and the key elements of their design, as well as synchronization techniques from simple locks to transactional memory systems Visit the companion site and download source code, example Java programs, and materials to support and enhance the learning experience',
    imgUrl: 'http://books.google.com/books/content?id=vfvPrSz7R7QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Java Programming for Beginners',
    description:
      "Java Programming for Beginners is an introduction to Java programming, taking you through the Java syntax and the fundamentals of object-oriented programming. About This Book Learn the basics of Java programming in a step-by-step manner Simple, yet thorough steps that beginners can follow Teaches you transferable skills, such as flow control and object-oriented programming Who This Book Is For This book is for anyone wanting to start learning the Java language, whether you're a student, casual learner, or existing programmer looking to add a new language to your skillset. No previous experience of Java or programming in general is required. What You Will Learn Learn the core Java language for both Java 8 and Java 9 Set up your Java programming environment in the most efficient way Get to know the basic syntax of Java Understand object-oriented programming and the benefits that it can bring Familiarize yourself with the workings of some of Java's core classes Design and develop a basic GUI Use industry-standard XML for passing data between applications In Detail Java is an object-oriented programming language, and is one of the most widely accepted languages because of its design and programming features, particularly in its promise that you can write a program once and run it anywhere. Java Programming for Beginners is an excellent introduction to the world of Java programming, taking you through the basics of Java syntax and the complexities of object-oriented programming. You'll gain a full understanding of Java SE programming and will be able to write Java programs with graphical user interfaces that run on PC, Mac, or Linux machines. This book is full of informative and entertaining content, challenging exercises, and dozens of code examples you can run and learn from. By reading this book, you'll move from understanding the data types in Java, through loops and conditionals, and on to functions, classes, and file handling. The book finishes with a look at GUI development and training on how to work with XML. The book takes an efficient route through the Java landscape, covering all of the core topics that a Java developer needs. Whether you're an absolute beginner to programming, or a seasoned programmer approaching an object-oriented language for the first time, Java Programming for Beginners delivers the focused training you need to become a Java developer. Style and approach This book takes a very hands-on approach, carefully building on lessons learned with snippets and tutorials to build real projects.",
    imgUrl: 'http://books.google.com/books/content?id=3RhKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'COMPUTER PROGRAMMING IN FORTRAN 77',
    description:
      "This is a revised and enlarged version of the author's book which received wide acclamations in its earlier three editions. It provides a lucid and in-depth introduction to the programming language Fortran 77 which is widely used by scientists and engineers.The fourth edition is completely revised chapterwise and also minor corrections incorporated. A new standard for Fortran called Fortran 90 was introduced in early 90s and compilers for this version of Fortran were sold in early 1995 by computer vendors. All Fortran 77 programs will run without change with Fortran 90 compilers; however some aspects of Fortran 77 have been declared obsolete and will not run on future Fortran compilers_these are explained in this revised edition. An appendix consolidates these features. Fortran 90 is introduced in a new chapter which summarises all its features.",
    imgUrl: 'http://books.google.com/books/content?id=s4SoW3wa-LgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
  {
    name: 'Programming in C, 2/e',
    description:
      'Combining the features of high level language and functionality assembly language, this book reduces the gap between high level language and low level language, which is why C is known as middle level language. It is written for the students of B.E./B. Tech, M.E./M. Tech, MCA, M. Sc(Comp. Sc)/M. Sc(IT), B CA, BBA, MBA, B. Sc(IT), B. Sc(Comp. Sc), Diploma in Computer Science and other computer programs. --',
    imgUrl: 'http://books.google.com/books/content?id=UoN_r_NMR_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
  },
]
