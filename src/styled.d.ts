// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    
      title: string;
      colors: {
        header: string;
        font: string;
        background: string;
      
      }
  }
}