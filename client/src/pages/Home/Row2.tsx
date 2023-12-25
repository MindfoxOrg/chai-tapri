import BoxHeader from "@/components/util/BoxHeader"
import DashboardBox from "@/components/util/DashboardBox"

const Row2 = (props : Props) => {
  return (
    <>
    <DashboardBox gridArea="d">
    <BoxHeader title={`Share your thoughts from today`}
          subtitle={"Create a new post ..."}
          sideText={""}></BoxHeader>
        
    </DashboardBox>

    <DashboardBox gridArea="e">
    <BoxHeader title={`Recent posts`}
          subtitle={"Check out all latest posts ..."}
          sideText={""}></BoxHeader>
    </DashboardBox>

    <DashboardBox gridArea="f">
    <BoxHeader title={props.title}
          subtitle={""}
          sideText={""}></BoxHeader>
    </DashboardBox>
    </>
  )
}

export default Row2