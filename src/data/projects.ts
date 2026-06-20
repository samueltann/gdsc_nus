export type Project = {
  slug: string;
  title: string;
  summary: string;
  organisationContext: string;
  problemStatement: string;
  projectGoals: string;
  image: string;
  /** YouTube watch/share URL for the project intro video. Empty until uploaded. */
  videoUrl: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "caring-for-life",
    title: "Caring For Life",
    summary: "Equip individuals to prevent suicide and build resilience within the community.",
    organisationContext:
      "Caring for Life (CFL) is a Singapore-based charity working towards building a suicide-resilient community through prevention training, resilience-building programmes, advocacy, and community support.",
    problemStatement:
      "As CFL's work relies on trained volunteers and facilitators, managing volunteer records, credentials, training attendance, availability, and communications manually can become difficult as the organisation grows.",
    projectGoals:
      "We developed a Volunteer Management System that centralises volunteer profiles, automates communications, tracks credentials and activity, manages training bookings, and provides dashboards for easier reporting. This helps CFL reduce administrative workload and better support volunteers in carrying out its mission.",
    image: "/caringforlife.png",
    videoUrl: "https://youtu.be/XXY-J9MakJQ",
    technologies: [],
  },
  {
    slug: "action-for-singapore-dogs",
    title: "Action for Singapore Dogs",
    summary: "Rescuing, fostering, and rehoming stray and abandoned dogs in Singapore",
    organisationContext:
      "Action for Singapore Dogs (ASD) is a registered charity established in December 2000, dedicated to improving the welfare of stray and abandoned dogs in Singapore through a strict no-kill approach. Their work spans rescue, rehabilitation, fostering, adoption, sterilisation, public education, fundraising, and volunteer support.",
    problemStatement:
      "Managing shelter operations involves many moving parts, including dog profiles, medical histories, vet bills, sponsorship records, adoption status, shelter capacity, and volunteer access. When this information is stored across scattered spreadsheets or manual records, it becomes difficult to search, update, and share securely.",
    projectGoals:
      "We developed FetchIt, a Dog Shelter Management System that centralises dog records, medical and adoption information, sponsorship details, and shelter data. With role-based access and an interactive dashboard, ASD can securely manage information while tracking medical expenses, adoption rates, sponsorship coverage, and shelter occupancy more easily.",
    image: "/actionforsingapore.png",
    videoUrl: "https://youtu.be/zsNt_sJ4UrE",
    technologies: [],
  },
  {
    slug: "itsrainingraincoats",
    title: "ItsRainingRaincoats",
    summary: "Supports migrant workers by providing essentials, educational programs, and community integration initiatives.",
    organisationContext:
      "ItsRainingRaincoats (IRR) is a Singapore charity that supports migrant worker welfare by building bridges of integration between migrant workers and residents in Singapore. Through initiatives such as donation drives, community programmes, and the inspIRRe Store, IRR provides migrant workers with access to essential items and support. The inspIRRe Store allows eligible male migrant workers on Work Permits to collect free essentials such as clothes, toiletries, bags, snacks, and electronics.",
    problemStatement:
      "Managing weekend shop visits manually can be time-consuming, as staff need to check eligibility, confirm bookings, send reminders, handle rescheduling, and track attendance across limited shop slots.",
    projectGoals:
      "We developed a website-based chatbot system that allows migrant workers to reserve shop slots easily, while automating eligibility checks, confirmations, reminders, and rescheduling. Staff can also use a real-time dashboard to track bookings, attendance, and slot capacity, creating a smoother and fairer booking process.",
    image: "/itsraining.png",
    videoUrl: "https://youtu.be/hZqaUTU3xys",
    technologies: [],
  },
  {
    slug: "siloamxperience",
    title: "SiloamXperience",
    summary: "Creating sustainable change in underprivileged communities by providing quality education, vocational training, and humanitarian support in Singapore and Cambodia.",
    organisationContext:
      "Siloam Xperience is a non-profit organisation committed to creating sustainable change in underprivileged communities through quality education, vocational training, and humanitarian support in Singapore and Cambodia.",
    problemStatement:
      "As Siloam works across different programmes, locations, volunteers, and donor groups, managing information manually can become increasingly difficult. Volunteer onboarding, project assignments, performance tracking, communications, donor records, donation histories, and receipt generation all require accurate and timely coordination. Without a centralised system, staff may face duplicated work, scattered records, and limited visibility over volunteer engagement and donor support.",
    projectGoals:
      "We developed a Volunteer and Donor Management System that centralises volunteer onboarding, project matching, donor records, donations, automated receipts, and communication. Real-time dashboards also help Siloam track volunteer participation, donor contributions, and programme activity more easily.",
    image: "/siloamxperience.png",
    videoUrl: "https://youtu.be/5z93z310RVE",
    technologies: [],
  },
  {
    slug: "the-volunteer-switchboard",
    title: "The Volunteer Switchboard",
    summary: "Connects individuals with meaningful volunteer opportunities across various causes, fostering purposeful and impactful giving experiences.",
    organisationContext:
      "The Volunteer Switchboard connects individuals and organisations with meaningful volunteer opportunities across different social causes. For this project, the focus is on supporting elderly beneficiaries through order and delivery coordination.",
    problemStatement:
      "Managing these orders manually can be difficult, as volunteers and runners need to handle order submissions, updates, assignments, status tracking, and last-minute changes.",
    projectGoals:
      "We developed an Order and Runner Management System that allows volunteers to place, track, and update orders, while runners manage order statuses in real time. This improves coordination, reduces manual follow-ups, and helps ensure elderly beneficiaries receive support more smoothly.",
    image: "/volunteer_switchboard.png",
    videoUrl: "https://youtu.be/WxDuUCiMrf8",
    technologies: [],
  },
];
