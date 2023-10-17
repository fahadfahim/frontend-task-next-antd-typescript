import BestSellingCourse from "@/component/bestSellingCourse/bestSellingCourse";
import BrowseTopCategory from "@/component/browseTopCategory/browseTopCategory";

import HeroBanner from "@/component/heroBanner/heroBanner";
import BecomeInstructor from "@/component/instructor/becomeInstructor";
import TopInstructor from "@/component/instructor/topInstructor";

import RecentlyCourse from "@/component/newCourse/recentlyCourse";
import StartLearning from "@/component/startLearning/startLearning";
import Layout from "@/layout/layout";

export default function Home() {
  return (
    <div className="main">
      <Layout>
        <HeroBanner />
        <BrowseTopCategory />
        <BestSellingCourse />
        <RecentlyCourse />
        <BecomeInstructor />
        <TopInstructor />
        <StartLearning />
      </Layout>
    </div>
  );
}
