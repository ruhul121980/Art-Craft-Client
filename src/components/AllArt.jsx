
import { useLoaderData } from 'react-router-dom'
import AllArtTable from './AllArtTable';

export default function AllArt() {
  const allArt=useLoaderData();
  return (
    <div>
      {
        allArt.map(Art=> <AllArtTable key={Art._id} Art={Art}> </AllArtTable>)
      }
    </div>
  )
}
