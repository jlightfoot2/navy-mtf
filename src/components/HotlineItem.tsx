import * as React from 'react';

export interface HotlineInterface {
  title: string;
  number: string;

}

export interface Props {
  hotline: HotlineInterface
}
const HotlineItem: React.SFC<Props> = ({hotline}) => {

   return <div>
     {hotline.title}
   </div>
}

export default HotlineItem;