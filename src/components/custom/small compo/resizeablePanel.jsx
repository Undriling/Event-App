import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { Img1, Img2, Img3 } from "../../../constants/constants"
function ResizeablePanel() {
  return (
    <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
                    <img src={Img1} alt='img1' className='object-cover h-[400px] rounded-3xl shadow-lg'/>
        </ResizablePanel>
        <ResizablePanel>
        <ResizableHandle />
            <img src={Img2} alt='img2' className='object-cover h-[500px] w-[400px] rounded-3xl'/>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel> 
            <img src={Img3} alt='img3' className='object-cover h-[300px] rounded-3xl'/>
        </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default ResizeablePanel;