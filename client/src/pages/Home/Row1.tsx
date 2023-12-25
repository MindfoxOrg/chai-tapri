import BoxHeader from "@/components/util/BoxHeader"
import DashboardBox from "@/components/util/DashboardBox"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Row1 = (props : Props) => {
  
  return (
    <>
    <DashboardBox gridArea="a">
    <BoxHeader title={`Hey Niloy, Welcome Back !`}
          subtitle={""} icon={<AccountCircleIcon/>}
          sideText={""}></BoxHeader>
        
    </DashboardBox>

    <DashboardBox gridArea="b">
    <BoxHeader title= {`Search friends`}
          subtitle={"Search for friends ..."}
          sideText={""}></BoxHeader>
    </DashboardBox>

    <DashboardBox gridArea="c">
    <BoxHeader title={`Chat at Tapri`}
          subtitle={""}
          sideText={"+10 messages"}></BoxHeader>
    </DashboardBox>
    </>
  )
}

export default Row1