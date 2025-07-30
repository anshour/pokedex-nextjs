import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;
