/*
 * JSX.Element; // Single object not supported arrays
 * JSX.Element | JSX.Element[];
 * React.ReactNode; -> support html elements, portals etc (React.ReactChild |  React..ReactChild[]  subset of ReactNode)
 * React.ReactChildren; (it is not a type || built in to JS library ||  bunch of utility methods working with react children || it has bunch of helper methods )
 * React.ReactChild[];
 */

 type BoxProps = { children: React.ReactNode, style?: React.CSSProperties };

 const Box = ({ children , style = {}}: BoxProps ) => {
   return (
     <section style={{ padding: "1em", border: "5px solid green", ...style }}>
       {children}
     </section>
   );
 };
 
function Children() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box style={{borderColor: 'red'}}>
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
 
 export default Children;