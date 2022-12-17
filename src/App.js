import logo from './logo.svg';
import './App.css';
import { motion, useCycle } from 'framer-motion';


function App() {

  const dmUI =  {
    open: {
      left: "50vw",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        restDelta: 0.001,
      }
    },
    close: {
      left: "calc(100vw - 40px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      }
    }
  }
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <div className="App">
      <div className="main-body">
        <motion.div
          className="dm-ui"
          onClick={() => {
            toggleOpen()
            console.log(isOpen);
          }}
          initial={false}
          whileHover={{ scale: 1.05 }}
          variants={dmUI}
          animate={isOpen ? "open" : "close"}
          >
            <div className="dm-ui-side-label">
              <div className="rotated-label">DM UI</div>
            </div>
          </motion.div>
        </div>
    </div>
  );
}

export default App;
