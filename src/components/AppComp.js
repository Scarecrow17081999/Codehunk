
let data = [
  {
    name: "Moovn App",
    image: "https://codehunktech.com/wp-content/uploads/2022/07/334.png",
    details: "Moovn provides a Suite of Integrated Mobile and Web Applications",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Wolt Delivery App",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/226.png",
      details: "Wolt makes it incredibly easy to discover and get great food, groceries.",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Digi Foods",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/225.png",
      details: "Digi-Foods app enables customers to search for vendors within their geographical area and place.",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Tranxit App",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/224.png",
      details: "Tranxit is a cost effective taxi booking app. You can schedule a booking with precise location pins.",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Beachbody App",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/12345.jpg",
      details: "The Team Beachbody Events App is your new one-stop shop! Simply download the app for instant access.",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Gold Gym App",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/unnamed.png",
      details: "The Golds Gym app provides class schedules, social media platforms, fitness goals, and in-club challenges",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Upayments App",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/upayments-1000.jpg",
      details: "Create .. Send .. Get Paid! Simple and fast online payment application that allows businesses of all kinds to bill their clients online.",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
  {
      name: "Dental Chat",
      image: "https://codehunktech.com/wp-content/uploads/2022/07/777.png",
      details: "Let us help you get the dental help you need! Do you have Dental Emergency Questions or Need Help",
    icon1:
      "https://play.google.com/store/apps/details?id=com.moovn.rider&hl=en&gl=US",
    icon2: "https://apps.apple.com/us/app/moovn/id1001122843",
  },
];
function AppComp() {
    return (<div className="AppCompDiv">

    <div className="AppComp">
    {data.map((e)=>{
        return(<div>
            <img src={e.image}/>
            <h4>{e.name}</h4>
            <p>{e.details}</p>
            <i class="far fa-play-circle"></i>
            

        </div>)
    })}
    </div>
  </div>);
}
export default AppComp;
