import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Flame } from 'lucide-react';
import { menuCategories, type MenuCategory } from '@/data/menuData';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const isMobile = useIsMobile();

  const specialCombos = menuCategories.find(c => c.name === 'Special Combos');
  const regularCategories = menuCategories.filter(c => c.name !== 'Special Combos');

  // Calculate dynamic height for mobile based on items count
  const getSheetHeight = (itemCount: number) => {
    // Base height for header ~100px, each item ~60px, padding ~40px
    const calculatedHeight = 100 + (itemCount * 60) + 40;
    const maxHeight = window.innerHeight * 0.75; // 75vh max
    const minHeight = 250; // minimum height
    return Math.max(minHeight, Math.min(calculatedHeight, maxHeight));
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium uppercase tracking-wider text-sm"
          >
            Our Menu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4"
          >
            Delicious <span className="text-gradient-gold">Offerings</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-divider mt-6"
          />
        </div>

        {/* Special Combos Section */}
        {specialCombos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{specialCombos.icon}</span>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Special JH Combo Foods
              </h3>
              <span className="ml-2 bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                Best Value
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialCombos.items.map((combo, index) => (
                <motion.div
                  key={combo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-primary/10 via-card to-card border-2 border-primary/30 rounded-2xl p-5 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Save {combo.originalPrice ? `₹${parseInt(combo.originalPrice.replace('₹', '')) - parseInt(combo.price.replace('₹', ''))}` : ''}
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">{combo.name}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-primary">{combo.price}</span>
                    {combo.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{combo.originalPrice}</span>
                    )}
                    <span className="text-xs text-muted-foreground">only</span>
                  </div>
                  {combo.includes && (
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-medium mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {combo.includes.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-secondary/70 text-secondary-foreground px-2 py-1 rounded-md"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {combo.description && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {combo.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {regularCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.03, duration: 0.4 }}
                onClick={() => setSelectedCategory(category)}
                className="group bg-card hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-3xl md:text-4xl block mb-2 group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="text-xs md:text-sm font-medium text-foreground block truncate">
                  {category.name}
                </span>
                <span className="text-[10px] text-muted-foreground">
                  {category.items.length} items
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-8 space-y-1"
        >
          <p className="text-muted-foreground text-sm">
            Tap on a category to view items and prices
          </p>
          <p className="text-muted-foreground text-sm">
            * All items are 100% vegetarian
          </p>
        </motion.div>
      </div>

      {/* Category Sheet - Bottom for mobile, Right side for desktop */}
      <Sheet open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <SheetContent
          side={isMobile ? "bottom" : "right"}
          className={
            isMobile
              ? "rounded-t-3xl p-0 max-h-[75vh]"
              : "w-[400px] sm:w-[450px] p-0"
          }
          style={isMobile && selectedCategory ? { height: getSheetHeight(selectedCategory.items.length) } : undefined}
        >
          {selectedCategory && (
            <>
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border sticky top-0 bg-background z-10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedCategory.icon}</span>
                  <div>
                    <SheetTitle className="text-xl font-bold">{selectedCategory.name}</SheetTitle>
                    {selectedCategory.priceLabel && (
                      <SheetDescription className="text-xs">
                        Prices: {selectedCategory.priceLabel}
                      </SheetDescription>
                    )}
                  </div>
                </div>
              </SheetHeader>
              <ScrollArea className={isMobile ? "h-[calc(100%-80px)]" : "h-[calc(100vh-100px)]"}>
                <div className="px-6 py-4 space-y-1 pb-8">
                  {selectedCategory.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 10 : 0 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      className="flex items-start justify-between py-3 border-b border-border/50 last:border-0"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-medium text-foreground">{item.name}</h4>
                          {item.isPopular && (
                            <span className="inline-flex items-center gap-1 bg-primary/20 text-primary rounded-full px-2 py-0.5 text-[10px] font-medium">
                              <Flame className="w-2.5 h-2.5" />
                              Popular
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-semibold text-primary">{item.price}</span>
                        {item.originalPrice && (
                          <span className="block text-xs text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollArea>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Menu;
