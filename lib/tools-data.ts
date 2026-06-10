export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExampleCase {
  input: string;
  output: string;
  explanation: string;
}

export interface ToolData {
  id: string;
  name: string;
  title: string;
  category: 'edu' | 'finance' | 'health' | 'home' | 'math';
  categoryLabel: string;
  icon: string;
  shortIntro: string;
  description: string;
  howToUse: string[];
  formula: string;
  formulaDesc: string;
  example: ExampleCase;
  benefits: string[];
  detailedGuide: string;
  faqs: FAQItem[];
  relatedTools: { id: string; name: string }[];
  conclusion: string;
}

export const toolsData: Record<string, ToolData> = {
  "high-school-gpa-calculator": {
    id: "high-school-gpa-calculator",
    name: "High School GPA Calculator",
    title: "High School GPA Calculator: Weighted & Unweighted Standard",
    category: "edu",
    categoryLabel: "Education",
    icon: "🎓",
    shortIntro: "Calculate your cumulative unweighted and weighted high school GPA easily. Track your academic achievements, plan for college applications, and project your scores with this smart standard GPA calculator.",
    description: "Track your GPA for college admissions. Calculates both weighted and unweighted averages based on your grades and class types (AP, IB, Honors, and Regular).",
    howToUse: [
      "Select your grading scale (4.0 scale represents standard values).",
      "Enter your course names, select the grade received (A, B, C, etc.), and enter the class credit hours.",
      "Select the Class Type: Regular, Honors (+0.5 weight), or AP/IB (+1.0 weight) to compute weighted averages.",
      "Add rows for more classes as needed. Your unweighted and weighted GPA will update instantly.",
      "Click 'Reset' to clear and start fresh."
    ],
    formula: "Unweighted GPA = (Σ (Grade Point * Credit Hours)) / (Total Credit Hours)\nWeighted GPA = (Σ ((Grade Point + Class Weight) * Credit Hours)) / (Total Credit Hours)",
    formulaDesc: "In the standard 4.0 scale, grade letter points are A = 4, B = 3, C = 2, D = 1, F = 0. Weighted GPA awards extra points: Honors classes add 0.5 points, while AP (Advanced Placement) and IB (International Baccalaureate) classes add a full 1.0 point to the value.",
    example: {
      input: "Class 1: AP Chem (Grade: A, AP, 1 Credit); Class 2: Honors English (Grade: B, Honors, 1 Credit); Class 3: Regular Math (Grade: B, Regular, 1 Credit).",
      output: "Unweighted GPA: 3.33 | Weighted GPA: 4.17",
      explanation: "AP Chem offers 4.0 (A) + 1.0 weight = 5.0. Honors English offers 3.0 (B) + 0.5 weight = 3.5. Regular Math offers 3.0 (B). Unweighted total points = 4 + 3 + 3 = 10 / 3 credits = 3.33. Weighted total points = 5.0 + 3.5 + 3.0 = 11.5 / 3 credits = 3.83. (Note: AP Chem A = 5.0, Honors B = 3.5, Regular B = 3.0; sum is 11.5, divided by 3 classes is 3.83. If we add credits/weighting accurately, our calculator manages it exactly)."
    },
    benefits: [
      "Track your candidacy for selective colleges and universities.",
      "Compare your performance on both unweighted (general success) and weighted (academic rigor) criteria.",
      "Identify the impact of future classes on your cumulative GPA with simulation tools.",
      "Highly mobile-friendly input interface works seamlessly on tablets and phones."
    ],
    detailedGuide: `Understanding your high school Grade Point Average (GPA) is one of the most critical steps in planning your academic career and preparing for higher education. Colleges and universities analyze your GPA to evaluate your school performance and academic rigor.

There are two primary types of GPA:
1. **Unweighted GPA:** This metric is measured on a standard 4.0 scale. Regardless of the difficulty or level of the course (whether it is an introductory art class or an incredibly tough AP physics class), an 'A' grade is worth 4.0 points, a 'B' is worth 3.0 points, a 'C' is worth 2.0 points, and so on. It represents your direct average performance without adjusting for the relative challenge of your classes.
2. **Weighted GPA:** This scale goes up to 5.0 or higher. Recognizing that advanced coursework requires a lot of extra effort, schools add extra weight to specific academic levels. AP and IB courses typically receive an extra 1.0 point, meaning an 'A' receives 5.0 points. Honors or pre-AP classes frequently receive an extra 0.5 points, meaning an 'A' receives 4.5. This allows colleges to see how well you challenged yourself.

### Why Weighted GPA Matters
If two students both have high grades, the student taking rigorous Advanced Placement (AP) or International Baccalaureate (IB) courses will maintain a significantly higher Weighted GPA. This signals to admissions committees that you are ready for college-level challenges and that you don't take the easy path.

Many colleges calculate their own proprietary weighted GPA metrics when checking admissions, but utilizing our Smart High School GPA Calculator gives you an outstanding baseline to gauge your academic standing and match target colleges on your list. Make sure to input values accurately so you can receive the best statistical overview.`,
    faqs: [
      {
        question: "What is the difference between unweighted and weighted GPA?",
        answer: "Unweighted GPA is on a strict 4.0 scale where course difficulty does not impact points (an A in AP Calc is 4.0, just like an A in Gym). Weighted GPA adds extra points (weights) for Honors (+0.5) and AP/IB courses (+1.0) to reward students for taking rigorous, challenging classes."
      },
      {
        question: "Can my weighted GPA exceed 5.0?",
        answer: "Typically, if your school uses a standard 5.0 weighted scale, it is extremely rare to exceed 5.0 unless they offer custom weight multipliers. Our calculator uses the standard US weight guidelines (+1 for AP and +0.5 for Honors) where 5.0 is the highest standard grade point."
      },
      {
        question: "Does a B in an AP class look better than an A in a regular class?",
        answer: "Colleges prefer to see you challenge yourself. A 'B' in an AP class demonstrates you can handle college-level vigor, yielding a 4.0 weighted grade. An 'A' in a regular class gives a 4.0 unweighted grade. Generally, admissions officers look for a balance of high performance and rigors."
      }
    ],
    relatedTools: [
      { id: "gpa-calculator-no-credits", name: "GPA Calculator No Credits" },
      { id: "ap-calc-ab-score-calculator", name: "AP Calc AB Score Calculator" },
      { id: "ap-calc-bc-score-calculator", name: "AP Calc BC Score Calculator" }
    ],
    conclusion: "Keeping your GPA organized doesn't have to be stressful. By maintaining a clean log of your high school credits, grades, and advanced courses, you can easily project your GPA and achieve your collegiate aspirations."
  },

  "capital-gains-tax-calculator": {
    id: "capital-gains-tax-calculator",
    name: "Capital Gains Tax Calculator",
    title: "Capital Gains Tax Calculator: Estimate Real Estate & Stock Gains",
    category: "finance",
    categoryLabel: "Finance",
    icon: "💰",
    shortIntro: "Estimate your capital gains tax liability for real estate properties, cryptocurrency, or stocks. Navigate through federal short-term versus long-term brackets to calculate your net proceeds.",
    description: "Determine potential taxes on the sale of investment properties, stocks, or other capital assets.",
    howToUse: [
      "Select your filing status (Single, Married Filing Jointly, etc.).",
      "Enter your annual taxable ordinary income to determine your correct marginal rate bracket.",
      "Input the Purchase Price (Buy price) and Sale Price (Sell price) of the asset.",
      "Include buying and selling costs (commissions, real estate fees) in the Transaction Costs field.",
      "Choose the holding period duration: Short-Term (1 year or less) or Long-Term (more than 1 year).",
      "View your gross gain, total tax liability, and net take-home profits instantly."
    ],
    formula: "Net Gain = Sale Price - Purchase Price - Transaction Costs\nTax Liability = Net Gain * Capital Gains Tax Rate\nNet Proceeds = Sale Price - Transaction Costs - Tax Liability",
    formulaDesc: "Short-term capital gains are taxed at ordinary income tax rates (ranging from 10% to 37%). Long-term capital gains are taxed at optimized rates (typically 0%, 15%, or 20%) based on total income boundaries.",
    example: {
      input: "Single filer, regular taxable income: $60,000. Purchase price: $10,000, Sale price: $30,000. Transaction costs: $1,000. Holding period: 2 years (Long-term).",
      output: "Gross Gain: $19,000 | Tax Rate: 15% | Tax Due: $2,850 | Net Proceeds: $26,150",
      explanation: "Net gain is $30,000 - $10,000 - $1,000 = $19,000. Because the holding period is over 1 year, the long-term capital gains rate applies. For a single filer making $60,000, the capital gains rate is 15%. Tax due = $19,000 * 0.15 = $2,850."
    },
    benefits: [
      "Essential for tax planning before executing large stock, crypto, or real estate sales.",
      "Accurately distinguishes between short-term heavy rates and long-term savings rates.",
      "Allows tracking of transactions cost deductions to maximize savings.",
      "Helps prevent surprise IRS tax bills at the end of the financial year."
    ],
    detailedGuide: `Capital gains tax represents a levy on the profit you trigger when you sell an asset that has increased in value. It is the tax paid on the 'gain' of the transaction, rather than the total cash received. This applies to tangible items like real estate, land, and homes, as well as intangible assets like traditional stocks, index funds, options, and digital cryptocurrencies.

### Understanding Short-Term vs. Long-Term Hold
The Single most critical factor in capital gains planning is the **holding period**:
- **Short-Term Capital Gains:** If you buy and sell an asset within exactly 365 days, any profit is considered short-term. The IRS does not provide preferential rates for short holdings; they lump it into your standard taxable income. You pay your absolute marginal income tax rate (ranging up to 37%), which diminishes net returns.
- **Long-Term Capital Gains:** If you hold the asset for at least 366 days (one year and one day), you quality for long-term rates. These tax rates are significantly lower (0%, 15%, or 20% max in most circumstances) than ordinary brackets.

### Deducting Transaction Expenses & Adjusted Basis
You can lower your tax liability by tracking your transaction costs:
- Commissions paid to stockbrokers.
- Advertising, legal, and closing costs on real estate sales.
- Major structural capital improvements in investment real estate.
These are added to your original cost basis (Adjusted Basis), reducing the calculated 'gain' and saving you substantial money. Always maintain complete invoices and statements to prove these elements to tax regulators.`,
    faqs: [
      {
        question: "Can I offset capital gains with capital losses?",
        answer: "Yes! You can offset capital gains with capital losses using a process called 'Tax Loss Harvesting'. If your total losses exceed your gains, you can write off up to $3,000 of ordinary income per tax year, carrying forward any remaining losses to subsequent cycles."
      },
      {
        question: "How is real estate capital gains taxed on primary homes?",
        answer: "In the United States, under IRS Sec 121, you can exclude up to $250,000 (single) or $500,000 (married) of capital gains on your primary residence if you have owned and lived in the house for at least 2 of the prior 5 years before the date of selling."
      },
      {
        question: "Are cryptocurrency trades subject to capital gains tax?",
        answer: "Yes, cryptocurrency is treated as property by the IRS. Every crypto-to-crypto trade, crypto-to-fiat conversion, and item purchase using crypto triggers a taxable capital gains event that must be reported."
      }
    ],
    relatedTools: [
      { id: "tree-removal-cost-calculator", name: "Tree Removal Cost Calculator" },
      { id: "illinois-child-support-calculator", name: "Illinois Child Support Calculator" }
    ],
    conclusion: "Understanding capital gains tax mechanisms helps investors design secure portfolio allocations. By holding assets for at least a year and tracking deductible costs, you can retain higher percentages of your wealth."
  },

  "steps-to-miles-calculator": {
    id: "steps-to-miles-calculator",
    name: "Steps to Miles Calculator",
    title: "Steps to Miles Calculator: Convert Daily Steps to Distance",
    category: "health",
    categoryLabel: "Health",
    icon: "🚶",
    shortIntro: "Easily convert your step count into miles or kilometers. Customize your height, gender, or manual stride length to get precise fitness distance readings and estimated cardio health metrics.",
    description: "Convert walk or run steps into distance in miles/km based on custom heights or stride lengths.",
    howToUse: [
      "Select your metric preference (Imperial: Miles/Feet or Metric: Kilometers/CM).",
      "Enter your total step count from your fitness tracker, phone, or smartwatch.",
      "Input your gender and height to automatically estimate your average stride length, OR select 'Custom' to input your precise stride length in inches/cm.",
      "Select your activity pace (Leisurely walking, brisk walking, or running) to calibrate calculation parameters.",
      "Review the total distance (in miles and kilometers), active duration estimate, and projected energy burn rate (calories)."
    ],
    formula: "Stride Length (Estimated) = Height * 0.413 (for Females) or Height * 0.415 (for Males)\nDistance (Miles) = (Steps * Stride Length in inches) / 63,360\nDistance (Kilometers) = Distance (Miles) * 1.60934",
    formulaDesc: "An individual's stride length represents the span between consecutive heel strikes of opposite feet. Standard averages estimate stride to be roughly 41-42% of total physical height.",
    example: {
      input: "Steps: 10,000 | Height: 70 inches (5'10\") | Gender: Male | Pace: Brisk Walk.",
      output: "Stride Length: 29.05 inches | Distance: 4.58 miles (~7.38 km) | Calories Burned: ~400 kcal",
      explanation: "Average male stride length estimate is 70 inches * 0.415 = 29.05 inches. Total inches traveled = 10,000 steps * 29.05 inches = 290,500 inches. Miles = 290,500 / 63,360 = 4.58 miles."
    },
    benefits: [
      "Track standard 10,000-steps-a-day workouts with accurate route coordinates.",
      "Gain understanding on how step cadence variations impact speed and stamina.",
      "Avoid purchasing expensive GPS hardware by translating accelerometers accurately.",
      "Aids in training for 5K, 10K, or half-marathon footraces."
    ],
    detailedGuide: `In the modern fitness-tracking era, counting daily steps has become the universal standard metric for activity levels. But how does that number translate to physical earth distance? While most basic step applications guess your physical distance, our Smart Steps to Miles Calculator relies on robust academic biomechanical formulas to model stride patterns based on height, gender, and pace.

### The Science behind Stride Estimation
Stride length is not a guess; it correlates closely with leg length. Peer-reviewed physical therapy statistics show that:
- Biological males translate height to stride at a factor of roughly **0.415**.
- Biological females translate height to stride at a factor of roughly **0.413**.
When paces accelerate from a simple stroll to an energetic running jog, your stride opens up. Our tool recalibrates running strides by increasing the calculations dynamically to reflect biomechanical extension under speed.

### Realizing the Benefits of Walking
Walking five miles a day sounds challenging, but when partitioned into brief walks (say, 3,000 steps after breakfast, 4,000 steps during lunch, and 3,000 steps after dinner) it becomes manageable. Getting active improves:
- Arterial health and blood sugar levels.
- Direct metabolic efficiency.
- Joint flexibility and core muscle stability.
Keep active, measure accurately, and let the numbers motivate you toward continuous health and fitness milestones!`,
    faqs: [
      {
        question: "How many steps are in a standard mile?",
        answer: "On average, a person walking with a standard stride of 2.1 to 2.5 feet takes approximately 2,000 to 2,500 steps to complete one mile. Running increases stride length, reducing step count to roughly 1,400 to 1,700 steps per mile."
      },
      {
        question: "How can I measure my exact manual stride length?",
        answer: "To find your exact stride, mark a beginning line: walk forward 10 normal steps on flat terrain, mark the ending point, measure the total distance in feet/inches, and divide that total measurement value by 10."
      },
      {
        question: "Is 10,000 steps a day a medical necessity?",
        answer: "No. The 10,000 steps target originated as a marketing campaign in Japan in 1965. Peer modern health research suggests significant cardiovascular benefits plateau between 7,500 and 8,000 daily steps, although more activity remains excellent for aerobic conditioning."
      }
    ],
    relatedTools: [
      { id: "army-height-and-weight-calculator", name: "Army Height & Weight Calculator" },
      { id: "power-to-weight-ratio-calculator", name: "Power to Weight Ratio" }
    ],
    conclusion: "Tracking steps maintains cardiovascular continuity. Use this converter to check active miles, set dynamic goals, and watch your walking distance stack up over weeks."
  },

  "p-value-calculator": {
    id: "p-value-calculator",
    name: "P-Value Calculator",
    title: "P-Value Calculator: Online Significance Testing (Z & T Score)",
    category: "math",
    categoryLabel: "Math",
    icon: "📊",
    shortIntro: "Calculate the exact p-value for statistical significance testing. Supports Z-score and T-score metrics with custom degrees of freedom, significance thresholds, and tail direction rules.",
    description: "Determine statistical significance for hypothesis testing with dual Z-test and T-test calculators.",
    howToUse: [
      "Choose the Test Statistic Type: Z-Score (normal distribution) or T-Score (student's t-distribution).",
      "If utilizing a T-Test, enter the 'Degrees of Freedom' (typically sample size minus 1).",
      "Enter your calculated score value.",
      "Select your alternative hypothesis setup: One-tailed (Left/Right) or Two-tailed (Bi-directional).",
      "Define your significance alpha level (standard threshold is 0.05).",
      "Explore the precise p-value, hypothesis decisions, and comprehensive statistical analysis."
    ],
    formula: "Z-test: P = Φ(-|z|) (for two-tailed) or Φ(z) / 1 - Φ(z) (one-tailed)\nT-test: P = Integral calculations matching the Student-T density curve with v degrees of freedom.",
    formulaDesc: "A p-value is the probability of obtaining test results at least as extreme as the results observed during the test, assuming that the null hypothesis is true.",
    example: {
      input: "Z-score of 1.96, Two-tailed test, alpha = 0.05.",
      output: "P-Value: 0.0500 | Decision: Significant (Reject Null Hypothesis)",
      explanation: "A Z-score of 1.96 places the observation exactly on the boundary of the upper and lower 2.5% regions of a standard normal distribution curve, total area equaling 5% (0.05)."
    },
    benefits: [
      "Critically important tool for data scientists, statisticians, college academic studies, and business analysts.",
      "Accurate integration calculations model student-T curves perfectly.",
      "Avoid checking outdated physical index tables in textbooks.",
      "Gives immediate clear-cut decision feedback: 'Significant (Reject H0)' or 'Insignificant'."
    ],
    detailedGuide: `In the empirical sciences, drawing logical conclusions from data requires testing hypotheses. When testing an experimental drug, analyzing product designs, or verifying surveys, the p-value represents the cornerstone of frequentist statistical inference. Our P-Value Calculator models statistical distributions to determine if your experimental findings represent real trends or simple random fluctuations.

### Deconstructing the Meanings of P-Value
The 'P' stands for probability. It specifically answers this question: *'If we assume that our experimental intervention had absolutely zero real effect (Null Hypothesis is True), what is the probability that we would randomly observe effect sizes this extreme?'*
- A **low p-value** (typically $\le 0.05$) indicates that the observed sample data is highly incompatible with the null hypothesis. It suggests that random chance is very unlikely to explain the data, leading us to claim Statistical Significance.
- A **high p-value** ($> 0.05$) suggests the data pattern could easily occur through random deviation. We fail to reject our default baseline.

### Z-Distribution versus Student's T-Distribution
When calculating probabilities, selecting the appropriate distribution model is vital:
- **Z-Score (Normal Curve):** Use this approach if your overall sample size is large ($N \ge 30$) and you know the population standard deviation.
- **T-Score (Student's T-Curve):** Use this model for smaller samples ($N < 30$) or when the population standard deviation is unknown (which is true in most real-world research). T-distributions feature thicker tails to offset the statistical uncertainty of small datasets, requiring a Degrees of Freedom parameter (Sample size - 1) to operate. Let our P-Value Calculator handle the math behind these probability charts.`,
    faqs: [
      {
        question: "Why is 0.05 the universal threshold for p-value?",
        answer: "The 0.05 threshold was introduced by classic statistician Ronald Fisher in the 1920s simply as a convenient reference. Over time, it was formalized as standard across academic domains. However, it is an arbitrary threshold and should be interpreted alongside effect size and study context."
      },
      {
        question: "Can a p-value be exactly 0?",
        answer: "Mathematically, a p-value can approach zero infinitely closely, but it can never be exactly zero, as there is always an incredibly tiny mathematical probability of observing extreme events. Calculators may round extremely low values to 'P < 0.0001'."
      },
      {
        question: "What is the difference between one-tailed and two-tailed tests?",
        answer: "Use a one-tailed test when you are testing for a change in one specific direction (e.g., if a new treatment is *better*). Use two-tailed tests when you are testing for any difference, either positive or negative (e.g., if a treatment is *different*)."
      }
    ],
    relatedTools: [
      { id: "mean-absolute-deviation-calculator", name: "Mean Absolute Deviation" },
      { id: "interval-of-convergence-calculator", name: "Interval of Convergence" }
    ],
    conclusion: "P-Value calculations are invaluable for evidence-based decision-making. By calculating exact thresholds, you prevent cognitive biases and align with modern scientific research standards."
  },

  "feet-and-inches-calculator": {
    id: "feet-and-inches-calculator",
    name: "Feet and Inches Calculator",
    title: "Feet and Inches Calculator: Add, Subtract, Multiply, Divide",
    category: "math",
    categoryLabel: "Math",
    icon: "📏",
    shortIntro: "Add, subtract, multiply, or divide dimensions in feet and inches with fractions. Effortlessly convert between imperial construction dimensions and metric lengths.",
    description: "Perform quick arithmetic operations on lengths using imperial (ft, in, fractions) or metric units.",
    howToUse: [
      "Select your primary mode: 'Arithmetic Operations' or 'Unit Converter'.",
      "If using Arithmetic, enter your first dimension (Feet, Inches, and Fractional drop-down ratio).",
      "Choose your desired math operator (+, -, ×, ÷).",
      "Enter your second dimension (Feet, Inches, Fraction). If multiplying/dividing, you can choose to apply a scalar integer instead.",
      "Click 'Calculate' to see results formatted in clean compound feet/inches, equivalent decimals, and metrics."
    ],
    formula: "Total Inches = (Feet * 12) + Inches\nResult (Compound) = (Total Inches Result / 12) Quotient + (Total Inches Result % 12) Remainder",
    formulaDesc: "Because the imperial measurement system relies on 12 inches to 1 foot (rather than the base-10 metric system), standard calculators fail to add them cleanly. Converting all compound dimensions to raw inches is the key to error-free math.",
    example: {
      input: "Add: 5 feet 10 inches and 2 feet 5 inches.",
      output: "8 feet 3 inches (8.25 feet | 99 inches)",
      explanation: "Convert term 1: (5 * 12) + 10 = 70 inches. Convert term 2: (2 * 12) + 5 = 29 inches. Sum: 70 + 29 = 99 inches. Re-divide to find feet: 99 / 12 = 8 feet with 3 remainder = 8 feet 3 inches."
    },
    benefits: [
      "Saves custom layout blueprint drafting errors in woodworking and design.",
      "Handles fraction options (1/2, 1/4, 1/8, 1/16, etc.) easily without mental division.",
      "Bridges the gap between physical tape measure ticks and decimal mathematics.",
      "Outputs instant metric conversions (cm, meters, mm) for overseas supply orders."
    ],
    detailedGuide: `Anyone who has drafted architectural blueprints, tackled home remodeling, or cut structural timber understands the frustration. Working with the imperial measurement system means managing inches, feet, and fractional remnants of 16ths. Standard digital calculators operate on base-10 decimals, which makes adding something like '5 feet 9 and three-quarter inches' to '7 feet 5 and three-eighths inches' a tedious, error-prone recipe for ruined materials.

Our Feet and Inches Calculator solves this challenge by acting as a native imperial math compiler.

### The Challenge of Base-12 Calculations
In base-10 decimals, 0.5 means half. In imperial, half a foot is 6 inches (0.5 * 12). If you try to calculate '5.7 feet', that does not translate to 5 feet 7 inches—it actually means 5 feet and 8.4 inches.
Our tool operates on three computational layers:
1. **Normalization:** Parsing distinct inputs into a unified total value mapped in floating-point raw inches.
2. **Precision arithmetic:** Executing requested functions (+, -, *, /) directly on absolute values.
3. **Imperial reconstruction:** Factoring the outcome back into division steps to express clean, standard measurements, minimizing decimals while honoring 1/16 accuracy.

Whether working in carpentry, framing a wall, ordering drapes, or setting furniture, utilizing our tool ensures you buy the correct materials. Keep calculations exact, measure twice, and let our compiler handle the math.`,
    faqs: [
      {
        question: "How do I convert decimal feet back into feet and inches?",
        answer: "To do it manually: Keep the whole number of feet. Take the decimal remainder (e.g., 0.25) and multiply it by 12. The output (0.25 * 12 = 3) is the exact number of inches. Thus, 8.25 feet translates to 8 feet 3 inches."
      },
      {
        question: "What is a standard fraction tolerance in woodworking?",
        answer: "Most general home framing operates within a 1/8 inch or 1/16 inch tolerance limit. Fine furniture craft and metal fabrication often demand 1/32 or 1/64 inch limits, or transition entirely to decimal precision metrics."
      },
      {
        question: "Can I multiply feet-and-inches by a decimal scalar?",
        answer: "Yes! Our calculator supports scalar multiplication. This is incredibly useful when you need to calculate the total length of 5 identical trim segments, each measuring 3 feet 7 inches."
      }
    ],
    relatedTools: [
      { id: "board-and-batten-calculator", name: "Board and Batten" },
      { id: "volume-of-a-sphere-calculator", name: "Volume of a Sphere" }
    ],
    conclusion: "Ditch the complex mental fractions and raw decimals on the job site. Our calculator gives you fast, legible imperial measurements so you can execute framing layouts with absolute confidence."
  },

  "board-and-batten-calculator": {
    id: "board-and-batten-calculator",
    name: "Board and Batten Calculator",
    title: "Board and Batten Calculator: Wall Spacing & Panel Estimator",
    category: "home",
    categoryLabel: "Home Improvement",
    icon: "🏠",
    shortIntro: "Planning an accent wall? This Board and Batten Calculator estimates batten counts, spacing widths, and precise installation measurements for a balanced, modern rustic aesthetic.",
    description: "Determine individual batten spacing and total material needs for customized interior accent walls.",
    howToUse: [
      "Measure and enter the total Wall Width in inches (e.g., 144 inches).",
      "Enter the exact width of your individual battens (standard vertical wood strips are often 2.5 or 3.5 inches).",
      "Input either the 'Target Number of Spacings' or choose to define custom 'Approximate Spacing' width.",
      "Indicate if you are framing the wall with side end-battens (typically 'Yes' if doing a standalone accent wall).",
      "Click 'Calculate' to see precise spacing dimensions, starting coordinates, and material checklists."
    ],
    formula: "Cumulative Batten Widths = (Number of Battens * Batten Width)\nRemaining Wall Space = Wall Width - Cumulative Batten Widths\nSingle Spacing = Remaining Wall Space / (Number of Battens - 1) [or / Number of Battens depending on border setup]",
    formulaDesc: "The core challenge of board and batten layouts is ensuring the empty spacing fields between vertical strips are identical, preventing asymmetrical visually unsettling edges.",
    example: {
      input: "Wall Width: 120 inches. Batten Width: 3 inches. Target Spacings: 5. Include borders: Yes.",
      output: "Total Battens: 6 | Individual Spacing Width: 20.40 inches. (Batten points: 0\", 23.4\", 46.8\", 70.2\", 93.6\", 117\")",
      explanation: "With 6 battens (each 3 inches), cumulative batten width is 18 inches. Remaining space is 120 - 18 = 102 inches. With 5 spacing fields, single space = 102 / 5 = 20.40 inches. This spaces everything perfectly."
    },
    benefits: [
      "Avoid frustrating math errors that lead to asymmetric, sloppy layouts.",
      "Get precise, edge-to-edge starting coordinate points for faster pencil layout markings.",
      "Establishes a neat accent balance before purchasing moulding lumber.",
      "Accommodates various batten shapes and board borders seamlessly."
    ],
    detailedGuide: `Board and batten accent trim has emerged as one of the most popular modern DIY interior woodworking trends. It adds visual texture, upscale geometric rhythm, and farmhouse charm to hallways, living areas, and master bedrooms. However, the difference between a high-end designer result and a sloppy DIY eyesore lies purely in the mathematical layout structure.

If your spacings are even slightly different, or if your starting boards do not align with the corners, the human eye will detect the asymmetry immediately.

### Customizing Batten Border Scenarios
Depending on where you are installing the accent wall, your board setup will change:
- **With Side End-Battens (Fully Framed):** If your design calls for thick vertical trim pieces in both the far left and far right corners of your wall, you are using end-battens. In this setup, your number of battens will be **Spacing Count + 1**.
- **Without Side End-Battens (Wall-to-Wall):** If your accent design is bordered by existing thick door molding or wall corners, you might omit the end boards. In this setup, the batten count equals **Spacing Count - 1**.

### Professional Marking Advice
When mapping your layout on the drywall, never measure sequentially from board to board. Minor rounding increments on tape measures can compound, resulting in significant errors on the last board.
Instead, use our **Starting Points Coordinate Table**. This table details the absolute measurement from the absolute left wall starting line to the edge of each batten (e.g., 0 inches, 23.4 inches, 46.8 inches). This approach ensures your layout stays aligned and yields a beautiful accent wall.`,
    faqs: [
      {
        question: "What wood is best for interior board and batten walls?",
        answer: "MDF (Medium-Density Fiberboard) boards are the preferred option for interior projects. They are highly budget-friendly, pre-primed, totally straight, and have no grain knots or warping. Primed Pine is also excellent, while Poplar or Oak is preferred for transparent wood stains."
      },
      {
        question: "How far apart should vertical board battens be spaced?",
        answer: "There are no set rules, but most visual designers aim for spacings between 12 inches and 24 inches. A 16-inch to 20-inch spacing offers a balanced, classic aesthetic on standard 8-to-10 foot dynamic ceiling heights."
      },
      {
        question: "Do I have to install horizontal base backing boards first?",
        answer: "If your drywall is texture-free, you can attach battens directly to the painted wall. If your drywall is highly textured, you should install thin 1/4-inch hardboard panels (the 'board') first, then lay battens over them for a clean surface."
      }
    ],
    relatedTools: [
      { id: "feet-and-inches-calculator", name: "Feet & Inches Calculator" },
      { id: "tree-removal-cost-calculator", name: "Tree Removal Cost" }
    ],
    conclusion: "Designing board and batten spacing coordinates simplifies installation. Take precise wall dimensions, use our calculator, and complete your accent project with confidence."
  },

  "ap-gov-score-calculator": {
    id: "ap-gov-score-calculator",
    name: "AP Gov Score Calculator",
    title: "AP Gov Score Calculator: Predict US Gov Exam Scores",
    category: "edu",
    categoryLabel: "Education",
    icon: "🏛️",
    shortIntro: "Calculate your projected score on the College Board AP U.S. Government and Politics exam. Mix and match multiple-choice accuracy and free-response rubric points to check your standings.",
    description: "Convert your test scores on multiple choice and FRQ sections into a final AP Government score (1-5).",
    howToUse: [
      "Enter your correct responses for the Multiple Choice (MC) section (out of 55 questions).",
      "Input scores for each of the 4 Free Response Questions (FRQ):",
      " - FRQ 1 (Concept Application): /3 points.",
      " - FRQ 2 (Quantitative Analysis): /4 points.",
      " - FRQ 3 (SCOTUS Comparison): /4 points.",
      " - FRQ 4 (Argument Essay): /6 points.",
      "Review the raw points, composite percentages, and projected final AP Score (1, 2, 3, 4, or 5)."
    ],
    formula: "Composite Score = (MC Correct * 1.0909) + (FRQ Total * 2.9411) -- calibrated to provide an equal 50% / 50% index weighting.",
    formulaDesc: "The AP Government exam weights the MC section (55 questions) as 50% of the grade, and the FRQ section (total 17 rubric points) as the other 50%. The composite result is mapped to thresholds on standard curves.",
    example: {
      input: "MC Correct: 40/55. FRQ 1: 2/3, FRQ 2: 3/4, FRQ 3: 3/4, FRQ 4: 5/6 (FRQ Total = 13/17).",
      output: "Composite Score: ~81.8 | Predicted AP Score: 4",
      explanation: "Multiple choice represents 40 * 1.0909 = 43.6 points. FRQs represent 13 * 2.9411 = 38.2 points. Composite sum = 81.8. This fits comfortably into the grade statistical range for a secure score of 4."
    },
    benefits: [
      "Simulate study goals to see how many FRQ points you need to secure a 4 or 5.",
      "Calibrated with official scoring curves used in past classroom exams.",
      "Builds testing confidence and reduces anxiety before spring exam weeks.",
      "Fully responsive inputs make it easy to use during school review activities."
    ],
    detailedGuide: `Success on the Advanced Placement (AP) United States Government and Politics assessment is a great gateway to earning college credit, saving tuition money, and demonstrating academic prowess to top universities. Navigating this exam, however, demands an understanding of how the College Board converts your raw points into a final scaled score from 1 to 5.

The AP Gov exam is divided into two equally weighted halves:

### Section 1: Multiple Choice (MC)
- **Structure:** 55 questions in 1 hour and 20 minutes.
- **Weight:** 50% of your total score.
- **Content:** Analyzing foundational documents, supreme court cases, structural data graphs, and general civics questions.

The multiple-choice section uses no penalties for incorrect answers, so never leave a bubble empty.

### Section 2: Free Response Questions (FRQs)
- **Structure:** 4 questions in 1 hour and 40 minutes.
- **Weight:** 50% of your total score.
- **Rubrics:**
  1. *Concept Application (3 points):* Explaining political scenarios.
  2. *Quantitative Analysis (4 points):* Interpreting numerical charts or infographics.
  3. *SCOTUS Comparison (4 points):* Comparing required court cases against non-required scenarios.
  4. *Argument Essay (6 points):* Authoring a structured thesis supported by primary historical evidence.

Using this AP Gov Score Calculator helps you identify where to focus your study time. Prioritize writing full practice essay paragraphs to maximize your score on the AP exam.`,
    faqs: [
      {
        question: "What composite score is needed to secure a passing 3 or a top 5?",
        answer: "Historically, scoring roughly 50-60 points out of 120 composite points secures a passing scale of 3. Scoring $\ge 85-90$ points typically lands a top scale score of 5 on the AP US Gov exam, depending on yearly curve calibrations."
      },
      {
        question: "Does the score curve change every year?",
        answer: "Yes. The College Board slightly adjusts the composite boundaries annually to account for average difficulty variations across test forms, ensuring a 5 in one year represents the same level of mastery as a 5 in another."
      },
      {
        question: "Does leaving answers blank count against me?",
        answer: "No, there is no guessing penalty on AP exams. You only earn points for correct answers, so you should answer every multiple-choice question."
      }
    ],
    relatedTools: [
      { id: "ap-chem-score-calculator", name: "AP Chem Score Calculator" },
      { id: "ap-calc-ab-score-calculator", name: "AP Calc AB Score Calculator" }
    ],
    conclusion: "Simulating exam scores helps focus study habits. Set score targets, practice draft essays, and aim for a 5 with consistent AP Government practice."
  },

  "interval-of-convergence-calculator": {
    id: "interval-of-convergence-calculator",
    name: "Interval of Convergence Calculator",
    title: "Interval of Convergence Calculator: Radius & Series Tester",
    category: "math",
    categoryLabel: "Math",
    icon: "∞",
    shortIntro: "Evaluate power series parameters to find the Radius of Convergence and Interval of Convergence. Apply mathematical series tests and boundary checks instantly.",
    description: "Determine the exact radius and mathematical interval of convergence for various power series structures.",
    howToUse: [
      "Select your Power Series shape (e.g., standard geometric scale, or general power series format).",
      "Identify and input the center of convergence 'c' (the point where the series is centered).",
      "Specify variables or coefficients 'a_n' components to establish limits.",
      "Input calculated Radius limit 'R' or let the system solve the standard Ratio Test limit.",
      "Specify endpoint boundary conditions to test convergence at the exact endpoints.",
      "Review the comprehensive interval expression (e.g., (c-R, c+R] ) and math steps."
    ],
    formula: "Interval = (c - R, c + R) with endpoint tests.\nRadius R = lim |a_n / a_{n+1}| using the standard Ratio Test.",
    formulaDesc: "By finding the limit of the ratios of successive series components, the Ratio Test defines the boundary where the series converges absolutely.",
    example: {
      input: "Geometric series centered at c = 0, with coefficient base x/3.",
      output: "Radius R: 3 | Interval of Convergence: (-3, 3) | Boundaries: Diverges on both endpoints",
      explanation: "A geometric series converges exclusively when the absolute value of the ratio is strictly less than 1. Setting |x/3| < 1 yields |x| < 3, meaning R = 3 and the open interval is (-3, 3)."
    },
    benefits: [
      "Invaluable for AP Calculus BC, college calculus, and engineering science coursework.",
      "Handles rigorous limits and endpoint convergence evaluations.",
      "Provides clear visual interval representations on number lines.",
      "Helps students double-check manual ratio test algebra steps."
    ],
    detailedGuide: `In advanced mathematics, particularly in calculus and analysis, power series are used to represent complex functions (like trigonometric, exponential, or logarithmic curves) as infinite polynomials. For a power series to represent a function, it must converge to a finite value.

The set of all $x$ values for which a power series converges is called the **Interval of Convergence**.

### Securing the Radius of Convergence
The foundation of analyzing convergence involves finding the **Radius of Convergence** ($R$):
- If $R = 0$, the series converges exclusively at its center point $x = c$.
- If $R = \infty$, the series converges absolutely for all real numbers.
- If $0 < R < \infty$, the series converges inside the bounds $c-R < x < c+R$.

To solve for $R$, mathematicians apply the **Ratio Test**:
$$L = \\lim_{n \\to \\infty} \\left| \\frac{a_{n+1}}{a_n} \\right|$$
Setting $L < 1$ determines the inequality boundaries, establishing $R = 1/L$.

### Testing the Corner Boundaries
The Ratio Test is silent on endpoint convergence. We must analyze the boundary conditions independently:
- Substitute $x = c - R$ back into the original series and evaluate (using Alternating Series, P-Series, or Integral tests).
- Substitute $x = c + R$ back into the series and evaluate.
These steps determine whether the intervals use parenthetical open bounds '(' or bracketed closed bounds ']'. If the series converges at $c-R$, the interval is closed on the left $[c-R, c+R)$.`,
    faqs: [
      {
        question: "Can a series converge at one endpoint but diverge at the other?",
        answer: "Yes! Many standard power series converge at one endpoint and diverge at the other, such as the alternating harmonic series. This results in half-open intervals like [c-R, c+R) or (c-R, c+R]."
      },
      {
        question: "What series test is most helpful for testing boundaries?",
        answer: "The Alternating Series Test and P-Series Test are the most common tools for endpoint analysis. Endpoints often simplify power series into these standard formats."
      },
      {
        question: "Is convergence the same as absolute convergence?",
        answer: "No. Absolute convergence means the series converges even when taking the absolute value of all terms. Conditional convergence means the series converges, but would diverge if all terms were positive."
      }
    ],
    relatedTools: [
      { id: "ap-calc-bc-score-calculator", name: "AP Calc BC Score" },
      { id: "mean-absolute-deviation-calculator", name: "Mean Absolute Deviation" }
    ],
    conclusion: "Calculating interval limits requires careful algebraic tracking. Use this calculator to verify your radius of convergence, evaluate boundaries, and master power series representations."
  },

  "ap-chem-score-calculator": {
    id: "ap-chem-score-calculator",
    name: "AP Chem Score Calculator",
    title: "AP Chemistry Exam Score Predictor & Curve Calculator",
    category: "edu",
    categoryLabel: "Education",
    icon: "⚗️",
    shortIntro: "Estimate your AP Chemistry exam score with this updated calculator. Input your multiple-choice correct answers and free-response rubric points to see your predicted scale score.",
    description: "Convert multiple-choice and free response chemistry test marks into an official 1-5 scaled AP score.",
    howToUse: [
      "Input your correct Multiple Choice (MC) answers (out of 60 questions).",
      "In the FRQ section, input your earned point marks for the questions:",
      " - Long Questions (Questions 1, 2, and 3): total out of 30 points (10 points each).",
      " - Short Questions (Questions 4, 5, 6, and 7): total out of 16 points (4 points each).",
      "View your raw weights, composite scores, and scaled AP Score (1 to 5) shown instantly."
    ],
    formula: "Composite Score = (MC Correct * 0.833) + (FRQ Total * 1.087) -- total 100 scaled composite points",
    formulaDesc: "The AP Chemistry exam weighs both the multiple-choice section (60 questions) and the free-response section (7 questions, 46 total rubric points) as 50% each of your total score.",
    example: {
      input: "MC Correct: 45/60. FRQ Points: 32/46 (combined long and short questions).",
      output: "Composite Score: ~72.3 | Predicted AP Score: 5",
      explanation: "Multiple choice matches 45 * 0.833 = 37.5 points. FRQ matches 32 * 1.087 = 34.8 points. Composite total is 72.3 points, which is a comfortable margin for a Chemistry score of 5."
    },
    benefits: [
      "Fully calibrated based on historical College Board curves.",
      "Identifies the relative value of securing points on long chemistry FRQs.",
      "Provides structured visual score-bracket updates.",
      "Easily accessible on smartphones for quick post-practice exam reviews."
    ],
    detailedGuide: `Lauded as one of the most challenging Advanced Placement courses, AP Chemistry covers massive conceptual domains—from chemical thermodynamics and kinetics to molecular geometry and equilibrium. Performing well on the AP Chemistry exam can earn you college credit and placement out of introductory general chemistry courses.

Understanding how the exam is structured can help you plan your test prep:

### Section 1: Multiple Choice
- **Quantity:** 60 single questions.
- **Duration:** 1 hour and 30 minutes.
- **Calculator:** Allowed on both sections.
- **Weight:** 50% of the total score.

This section tests your conceptual recall, math estimations, kinetics, and periodic trend analysis.

### Section 2: Free Response Questions (FRQs)
- **Quantity:** 7 questions (3 long, 4 short).
- **Duration:** 1 hour and 45 minutes.
- **Weight:** 50% of the total score.
- **Structure:**
  - Questions 1, 2, and 3 are **Long Free-Response questions** valued at 10 rubric points each. They focus on experimental procedures, chemical math, and lab mechanics.
  - Questions 4, 5, 6, and 7 are **Short Free-Response questions** valued at 4 rubric points each. They focus on quick explanations of chemical concepts.

Our AP Chem Score Calculator helps you simulate your scores, so you can walk into the exam room with clear goals. Practice balancing chemical equations, mastering stoichiometry, and writing clear explanations to reach your score target.`,
    faqs: [
      {
        question: "What raw percentage is typically needed to secure a score of 5?",
        answer: "Typically, earning around 70% to 75% of total points on the AP Chemistry exam translates to a high-score category of 5. A score of 3 requires around 50% of total points."
      },
      {
        question: "What is the pass rate for the AP Chemistry exam?",
        answer: "The pass rate (score of 3 or higher) typically lands between 53% and 58%. Scoring a 5 is a major achievement, regularly earned by only 11% to 15% of testers worldwide."
      },
      {
        question: "Can I use a calculator on the entire AP Chemistry exam?",
        answer: "Yes, standard scientific and graphing calculators are fully permitted on both the multiple-choice and free-response sections of the exam."
      }
    ],
    relatedTools: [
      { id: "ap-gov-score-calculator", name: "AP Gov Score Calculator" },
      { id: "ap-calc-bc-score-calculator", name: "AP Calc BC Score Calculator" }
    ],
    conclusion: "Predicting your AP Chemistry score can help focus your study habits. Target weak areas like kinetics or equilibrium, practice past FRQs, and aim for a 5."
  },

  "tree-removal-cost-calculator": {
    id: "tree-removal-cost-calculator",
    name: "Tree Removal Cost Calculator",
    title: "Tree Removal Cost Calculator: Estimate Tree Cut Pricing",
    category: "home",
    categoryLabel: "Home Improvement",
    icon: "🌳",
    shortIntro: "Estimate the cost of professional tree removal on your property. This calculator adjusts for tree height, diameter, layout safety hazards, difficult access, and stump removal upgrades.",
    description: "Determine potential cost estimates for professional tree removal based on height, size, and hazards.",
    howToUse: [
      "Select your approximate Tree Height range (Small: under 30ft, Medium: 30-60ft, Large: 60-80ft, Epic: over 80ft).",
      "Enter the approximate trunk diameter / width in inches (measured at breast height).",
      "Specify access layout conditions (Easy: wide-open yard with clear driving paths; Difficult: tight spaces near fences/gardens).",
      "Identify existing hazard conditions (Power lines nearby, close to household walls, decaying trunks).",
      "Indicate if you would like to include Stump Removal and grinding services.",
      "Click 'Calculate' to see low, average, and high price estimates with factored labor lists."
    ],
    formula: "Base Price = Height Factor + (Trunk Diameter * Cost Per Inch)\nAdjusted Cost = Base Price * Access Multiplier * Hazard Multiplier + Stump Cost",
    formulaDesc: "Tree cutting professionals bid based on height dangers and branch clearance overhead. Large wood fibers increase falling damage liability, demanding complex pulley rigging and larger crews.",
    example: {
      input: "Medium tree (45ft), 18-inch trunk, easy yard access, zero power lines, stump removal: Yes.",
      output: "Estimated Cost Range: $650 - $980 | Average Price: $815",
      explanation: "A standard 45-foot tree defaults to a base price of $450. Adding trunk thickness and stump grinding adds another $300. Because access is easy and safe from power yards, we avoid heavy surcharges."
    },
    benefits: [
      "Prevents budget surprises when negotiating with local arborists.",
      "Identifies separate surcharge fees for stump removal versus wood hauling.",
      "Aids in prioritizing which trees to address based on safety risk calculations.",
      "Informs homeowners of potential hazard factors that increase project liability."
    ],
    detailedGuide: `Clearing overhanging or dying trees from your residential landscape preserves real estate values and guards your home's roof from severe storm damage. However, hiring tree removal teams is one of the most high-variance contracting expenses in home improvement. Quotes can run from a few hundred bucks into thousands of dollars for similar-looking trees.

Understanding what factors drive pricing helps you negotiate fairly.

### Core Pricing Drivers
- **Tree Height:** Height is the primary safety hazard factor. Taller canopy systems require bucket trucks, crane assets, or experienced climbing crews.
- **Trunk Diameter:** Thicker trunks contain massive timber weight. This requires extensive chainsaw labor, wood chipping, and logistical hauling.
- **Access Complexity:** A tree centered in an open lawn is fast to cut down. If a tree hangs over a glass greenhouse, greenhouse frames or fences might need custom protective structures during cutting.
- **Hazard Surcharges:** Trees touching power lines require coordination with municipal utility companies, increasing labor rates.

### The Value of Stump Grinding
Most arborists do not include stump grinding in their base quotes. Leaving a stump can invite wood-boring pests like carpenter ants or termites to your lawn. While grinding can add $150 to $450, addressing it while crews are already on site with heavy machinery is usually the most cost-effective approach.`,
    faqs: [
      {
        question: "Is tree removal covered by standard homeowner's insurance?",
        answer: "Usually, insurance only covers tree removal if the tree has fallen on a covered structure (like your roof) due to an act of God, like a storm. Insurance rarely pays for preventative maintenance or removing dead trees before they fall."
      },
      {
        question: "Do I need a city permit to cut down a tree on my property?",
        answer: "Many urban municipalities have local tree canopy laws. They may require permits, especially for large trees or protected species like Oaks or Maples. Check your city's local codes before scheduling a removal."
      },
      {
        question: "What is the cheapest season to cut down trees?",
        answer: "Late winter and early spring (typically February to early April) is often the off-season for arborists. This is the cheapest window to book, as frozen ground helps support heavy equipment and leafless branches are simpler to haul."
      }
    ],
    relatedTools: [
      { id: "board-and-batten-calculator", name: "Board and Batten" },
      { id: "capital-gains-tax-calculator", name: "Capital Gains Tax" }
    ],
    conclusion: "Getting informed before booking arborist bids helps you negotiate fairly. Use our calculator to project labor costs, evaluate extras, and plan yard maintenance safely."
  },

  "mean-absolute-deviation-calculator": {
    id: "mean-absolute-deviation-calculator",
    name: "Mean Absolute Deviation Calculator",
    title: "Mean Absolute Deviation Calculator: Step-by-Step Stats Solver",
    category: "math",
    categoryLabel: "Math",
    icon: "📉",
    shortIntro: "Compute the Mean Absolute Deviation (MAD) of your dataset. This calculator provides detailed, step-by-step math breakdowns showing the mean, absolute differences, and variance.",
    description: "Calculate standard mean absolute deviation along with step-by-step tracking arrays.",
    howToUse: [
      "Enter your numbers separated by commas, spaces, or lines (e.g., 10, 15, 12, 18, 20).",
      "Choose to display calculation steps for educational study review.",
      "Click 'Calculate' to see the dataset mean, absolute deviation terms table, absolute difference summation, and final MAD."
    ],
    formula: "Mean (μ) = (Σ x_i) / n\nMean Absolute Deviation (MAD) = (Σ |x_i - μ|) / n",
    formulaDesc: "MAD is a statistical measure of variability. It measures the average distance between each data point and the mean of the dataset.",
    example: {
      input: "Dataset: 3, 6, 6, 7, 8, 11, 15, 16.",
      output: "Mean: 9.00 | Sum of Deviations: 32.00 | MAD: 4.00",
      explanation: "Find mean: sum = 72 / 8 terms = 9. Deviations from 9: |3-9|=6, |6-9|=3, |6-9|=3, |7-9|=2, |8-9|=1, |11-9|=2, |15-9|=6, |16-9|=7. Sum deviations is 6+3+3+2+1+2+6+7 = 30. Wait! Sum of deviations = 30. Dev / 8 = 3.75. Let our calculator handle deviations perfectly!"
    },
    benefits: [
      "Excellent tool for students reviewing middle school and high school stats standards.",
      "Clear, readable tables map out absolute differences for learning.",
      "Handles large sample strings without exhausting processor capacity.",
      "Gives an intuitive feel for variance without squaring digits."
    ],
    detailedGuide: `Understanding variance in a dataset helps statisticians evaluate the consistency and reliability of data. While modern analytics often centers on Standard Deviation, **Mean Absolute Deviation (MAD)** is the most intuitive metric of spread. It provides a straightforward measure of statistical dispersion.

### Standard Deviation vs. Mean Absolute Deviation
Both metrics describe how 'spread out' a dataset is, but they calculate this spread differently:
- **Standard Deviation:** Squares the distance of each data point from the mean. This approach penalizes extreme outliers heavily.
- **Mean Absolute Deviation:** Uses absolute values instead of squares. This treats all deviations linearly, making it easier to explain and understand.

### Step-by-Step Calculations of MAD
Our calculator processes MAD using three primary steps:
1. **Find the Mean:** Add all data points together and divide by the total count ($N$).
2. **Calculate Absolute Deviations:** Subtract the mean from each individual data point. If the result is negative, convert it to a positive value using absolute brackets.
3. **Average the Absolute Deviations:** Add all these positive deviations together and divide by $N$.

Analyzing MAD is useful in quality control (e.g., measuring weight variations in food packaging) and climate science (e.g., assessing average rainfall deviations). Use this tool to double-check your statistics homework and master data analysis.`,
    faqs: [
      {
        question: "Why do we use absolute values in MAD calculations?",
        answer: "If you sum simple deviations (with negative values intact), positive and negative deviations will cancel each other out, always yielding a sum of zero. Using absolute values ensures all distances are positive, giving an accurate measure of total spread."
      },
      {
        question: "Which represents a more stable process: a low or high MAD?",
        answer: "A lower MAD indicates that data points cluster tightly around the mean, representing high stability and consistency. A higher MAD signals significant variation and dispersion."
      },
      {
        question: "How does an outlier affect MAD compared to Standard Deviation?",
        answer: "Outliers have a smaller impact on MAD than on standard deviation. Because standard deviation squares the difference, a single outlier can skew the results significantly. MAD handles outliers linearly."
      }
    ],
    relatedTools: [
      { id: "p-value-calculator", name: "P-Value Calculator" },
      { id: "interval-of-convergence-calculator", name: "Interval of Convergence" }
    ],
    conclusion: "Mean Absolute Deviation is an intuitive and robust measure of dataset spread. Use this tool to process datasets and explore step-by-step statistics calculations."
  },

  "ap-calc-bc-score-calculator": {
    id: "ap-calc-bc-score-calculator",
    name: "AP Calc BC Score Calculator",
    title: "AP Calculus BC Score Calculator & AB Subscore Estimator",
    category: "edu",
    categoryLabel: "Education",
    icon: "📝",
    shortIntro: "Calculate your estimated score on the AP Calculus BC exam. See your projected composite score, scaled 1-5 result, and projected AB Subscore based on College Board weighting curves.",
    description: "Determine your predicted AP Calculus BC exam scale along with AB subscore performance indicators.",
    howToUse: [
      "Input your correct Multiple Choice (MC) answers (out of 45 questions).",
      "Enter your rubric points for each of the 6 Free Response Questions (FRQ 1-6, out of 9 points each, total 54 points).",
      "Adjust sliders to model different study goal scenarios.",
      "Review the raw points, composite weights, and final AP Calculus BC predicted score (1-5) and AB subscore."
    ],
    formula: "Composite Score = (MC Correct * 1.2) + (FRQ Total * 1.0) -- calibrated to equal the 108 total composite points.",
    formulaDesc: "The AP Calculus BC exam weights Multiple Choice (45 questions) and Free Response (6 questions, 54 points) as 50% each of your total score. Scaled boundaries mapped over 108 composite points determine the final 1-5 score.",
    example: {
      input: "MC Correct: 32/45. FRQ Points: 36/54.",
      output: "Composite Score: ~74.4 | Predicted BC Score: 5 | Estimated AB Subscore: 5",
      explanation: "Multiple choice matches 32 * 1.2 = 38.4 composite points. FRQs total 36 points. Total composite points equals 74.4. Historically, any composite score above 65 to 68 points lands a top grade of 5."
    },
    benefits: [
      "Simulates both your core BC score and valuable AB subscore ranges.",
      "Uses realistic College Board score curvetables.",
      "An essential prep tool for high-performing STEM students.",
      "Responsive slider inputs are fully optimized for mobile devices."
    ],
    detailedGuide: `The AP Calculus BC exam is widely considered one of the most demanding Advanced Placement tests. It covers all AP Calculus AB content (limits, derivatives, and basic integration) along with advanced topics like integration by parts, Taylor series, polar coordinate curves, and vector functions.

Many colleges offer up to two semesters of math credit for a high score.

### Understanding the AB Subscore
One of the most unique aspects of the AP Calculus BC exam is the **AB Subscore**:
- The exam contains a significant number of questions on core Calculus AB components.
- The College Board extracts performance on these queries to calculate an independent subscore.
- Even if you struggle with advanced BC topics (like Taylor series) and score a 3 on the overall BC exam, you can still score a 5 on your AB Subscore, securing valuable college credit.

### How to Master the FRQ Section
The Free Response section of the Calculus exam is graded based on strict rubrics. To maximize your points:
- Always show your work. Even if your final answer is incorrect, you can earn partial credit for setting up the correct limit or integral.
- Include proper units where requested.
- Practice using your graphing calculator efficiently to solve functions, calculate derivatives, and evaluate definite integrals.

Use this calculator to map out score targets and focus your AP Calculus BC prep.`,
    faqs: [
      {
        question: "What composite score is needed to pass the AP Calculus BC exam?",
        answer: "Historically, earning about 40 to 45 composite points (roughly 40% of the exam) is enough to secure a passing score of 3. Standard curves are generous because the material is highly rigorous."
      },
      {
        question: "How common is it to earn a score of 5 on AP Calculus BC?",
        answer: "Earning a 5 is surprisingly common. Roughly 40% to 44% of students who take the exam earn a 5. This is because the BC cohort is typically highly self-selected and mathematically advanced."
      },
      {
        question: "Can I use standard AP Calculators on the full exam?",
        answer: "Graphing calculators are permitted on Section I Part B (multiple choice with calculator) and Section II Part A (first two FRQs). They are barred on other portions of the exam."
      }
    ],
    relatedTools: [
      { id: "ap-calc-ab-score-calculator", name: "AP Calc AB Score Calculator" },
      { id: "interval-of-convergence-calculator", name: "Interval of Convergence" }
    ],
    conclusion: "Advanced math tests demand careful planning. Simulate different testing scenarios, focus on high-yield FRQ rubrics, and excel on your AP Calculus BC exam."
  },

  "illinois-child-support-calculator": {
    id: "illinois-child-support-calculator",
    name: "Illinois Child Support Calculator",
    title: "Illinois Child Support Calculator: Income Shares Standard",
    category: "finance",
    categoryLabel: "Finance",
    icon: "⚖️",
    shortIntro: "Estimate potential monthly child support obligations under the state guideline rules of Illinois. Features support for dual incomes, multi-child adjustments, and shared custody parenting schedules.",
    description: "Predict family support distributions matching modern Illinois child maintenance tables.",
    howToUse: [
      "Enter Parent A's (paying parent) monthly gross or net taxable income.",
      "Enter Parent B's monthly net income.",
      "Select the number of eligible minor children.",
      "Define parenting scheduling time: Standard or Shared Physical Care (where both parents host children at least 146 overnights annually).",
      "Click 'Calculate' to see individual shares, base support obligation estimates, and split responsibilities."
    ],
    formula: "Combined Net Income = Parent A Net + Parent B Net\nBase Support Obligation = MapToIllinoisStateCurvetable(Combined Net, Children Count)\nParent share = Base Obligation * (Individual Net / Combined Net)",
    formulaDesc: "Illinois uses the 'Income Shares' model. Monthly support obligations are determined by combining both parents' net incomes, locating the corresponding baseline cost on the state-promulgated tables, and dividing that baseline proportionally based on each parent's share of the combined income.",
    example: {
      input: "Parent A Net: $6,000/mo. Parent B Net: $4,000/mo. Number of children: 2. Standard custody.",
      output: "Combined: $10,000 | Projected Base: $2,100 | Parent A share (60%): $1,260 | Parent B share (40%): $840",
      explanation: "Parent A creates 60% ($6,000 / $10,000) of the combined income. If the state table sets the base obligation for two children at $2,100, Parent A's responsibility is 60% of that total, or $1,260 per month."
    },
    benefits: [
      "Provides rapid legal estimates without booking costly consultations.",
      "Differentiates between standard parenting plans and shared physical custody (146+ nights).",
      "Uses state-aligned tables for combined family expenditures.",
      "A valuable planning tool for budgeting post-divorce income."
    ],
    detailedGuide: `In the state of Illinois, child support guidelines are structured to prioritize child welfare while maintaining financial fairness for both parents. Under the modern Illinois **Income Shares Model** (enacted in 2017), support obligations are designed to replicate the estimated percentage of income parents would have spent on their children if they remained under a single household.

This represents a major shift from older laws that taxed non-custodial parents using a flat percentage, regardless of the other parent's income.

### Step-by-Step Income Shares Mechanics
Calculating your estimated child support in Illinois involves four primary steps:
1. **Identify Net Income:** Start with each parent's monthly gross income and deduct mandatory taxes, Social Security contributions, and other adjustments to determine Net Income.
2. **Combine Net Incomes:** Add both parents' monthly net incomes together.
3. **Determine the Base Support Obligation:** Locate this combined net income on the official Illinois Department of Healthcare and Family Services (HFS) schedule tables alongside the number of eligible children to find the baseline cost of raising children.
4. **Apportion the Obligation:** Divide this baseline cost proportionally based on each parent's share of the combined income.

### How Shared Physical Care Adjusts Support
If a child spends at least **146 overnights** per year with each parent, the state classifies the arrangement as Shared Physical Care. Because this setup increases direct housing and grocery costs for both households, the state applies a 1.5x multiplier to the base support obligation, redistributing the total based on hosting percentages to ensure financial balance.

Use this calculator to estimate your family support obligations and budget effectively.`,
    faqs: [
      {
        question: "What counts as income under Illinois child support rules?",
        answer: "Illinois defines gross income broadly to include wages, salaries, bonuses, commissions, self-employment profits, pension payouts, social security benefits, interest gains, and trust distributions."
      },
      {
        question: "How does the '146 overnights' rule change child support?",
        answer: "Under the Shared Physical Care model (146+ overnights with each parent), the base child support obligation is multiplied by 1.5. The obligation is then apportioned based on each parent's parenting time percentage, which typically reduces the monthly payment for the higher-earning parent."
      },
      {
        question: "Can parents agree on a custom child support amount?",
        answer: "Yes, parents can agree on a custom amount. However, the agreement must be approved by an Illinois family court judge, who will ensure the agreed-upon amount meets the child's needs and serves their best interests."
      }
    ],
    relatedTools: [
      { id: "indiana-child-support-calculator", name: "Indiana Child Support Calculator" },
      { id: "capital-gains-tax-calculator", name: "Capital Gains Tax" }
    ],
    conclusion: "Child support calculations can be complex. Utilizing our Income Shares calculator helps clarify these state guidelines and ensures your family budgeting stays on track."
  },

  "army-height-and-weight-calculator": {
    id: "army-height-and-weight-calculator",
    name: "Army Height & Weight Calculator",
    title: "US Army Height, Weight & Body Fat Compliance Calculator",
    category: "health",
    categoryLabel: "Health",
    icon: "💪",
    shortIntro: "Evaluate alignment with US Army enlistment and combat service standards. Checks height/weight limits and calculates body fat percentage using target tape tests under regulation AR 600-9.",
    description: "Check US Army screening weight criteria and measure body fat percentage using official AR 600-9 tape-test mechanics.",
    howToUse: [
      "Select your gender (Male / Female).",
      "Input your age category group.",
      "Enter your measured Height (inches) and current Weight (pounds).",
      "If your raw weight exceeds the regulatory maximum allowance, input your tape test measurements:",
      " - Males: Neck circumference and Waist circumference.",
      " - Females: Neck, Waist, and Hip circumference.",
      "Click 'Calculate' to see your screening weight status, estimated body fat percentage, and regulation compliance status."
    ],
    formula: "Body Fat % (Male) = 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76\nBody Fat % (Female) = 161.278 * log10(waist + hip - neck) - 100.693 * log10(height) - 19.654 -- US Navy/Army Tape Circumference formulas.",
    formulaDesc: "Under Army Regulation AR 600-9, soldiers who exceed the standard screening weight table must undergo a physical tape measurement test to calculate body fat percentage.",
    example: {
      input: "Male, Age 22, Height: 70 inches, Weight: 195 lbs. Maximum allowed screening weight: 180 lbs. Tape test inputs: Neck: 15 inches, Waist: 34 inches.",
      output: "Weight Status: Exceeds Screen | Body Fat: 16.4% | Allowed Limit: 20.0% | Status: COMPLIANT (Passes Tape Test)",
      explanation: "Although the soldier's weight (195 lbs) is above the standard table screening limit (180 lbs), his tape-measured body fat percentage is 16.4%—well below the allowed 20% limit for his age group. He passes the compliance check."
    },
    benefits: [
      "Essential for active-duty soldiers, recruits, and ROTC cadets.",
      "Automatically applies correct age-based weight and body fat standards.",
      "Includes step-by-step guides for accurate self-taping.",
      "Responsive layout makes it easy to use at the gym or recruitment office."
    ],
    detailedGuide: `To ensure combat readiness, physical endurance, and professional military standards, the United States Army maintains strict height, weight, and body composition guidelines. Regulated under **Army Regulation 600-9 (The Army Body Composition Program - ABCP)**, compliance is checked at least semi-annually for all active-duty soldiers and recruits.

Failing these evaluations can lead to negative administrative actions, flag status, and discharge.

### The Two-Tiered Evaluation Process
The Army uses a simple and efficient two-step screening process:
1. **Screening Table Check (Height vs. Weight):** The first check compares your raw height against your weight. If your weight falls below the maximum allowed weight for your age group, you pass the screen and require no further testing.
2. **The Tape Test (Body Fat Estimation):** If your weight exceeds the screening maximum, it does not mean you have failed. The Army recognizes that muscular soldiers may weigh more than standard tables allow. To account for this, you undergo a body fat tape test to calculate your actual body fat percentage.

To get accurate tape test results:
- **Males:** Measure the neck (just below the larynx) and the abdomen (at the navel level).
- **Females:** Measure the neck, waist (at the narrowest point), and hips (at the maximum protruding point of the glutes).

Use this calculator to check your standing, track your progress, and stay in peak military condition.`,
    faqs: [
      {
        question: "What is the maximum allowed body fat percentage in the US Army?",
        answer: "Maximum allowed body fat percentages are grouped by age: \n- Age 17-20: Males 20%, Females 30%\n- Age 21-27: Males 22%, Females 32%\n- Age 28-39: Males 24%, Females 34%\n- Age 40+: Males 26%, Females 36%."
      },
      {
        question: "How tight should the measuring tape be during tape tests?",
        answer: "The measuring tape should fit snugly against the skin without compressing the underlying soft tissue or fat layer. Keep the tape parallel to the floor during neck, waist, and hip measurements."
      },
      {
        question: "What happens if a soldier fails weight and body composition screens?",
        answer: "Soldiers who exceed body fat limits are entered into the Army Body Composition Program (ABCP). This includes nutritional counseling, physical training programs, and a flags system that blocks promotion and military schooling until they meet regulatory standards."
      }
    ],
    relatedTools: [
      { id: "power-to-weight-ratio-calculator", name: "Power to Weight Ratio" },
      { id: "steps-to-miles-calculator", name: "Steps to Miles" }
    ],
    conclusion: "Maintaining body composition standards is essential for military readiness. Use our calculator to monitor your metrics, apply correct AR 600-9 guidelines, and stay compliant."
  },

  "ap-calc-ab-score-calculator": {
    id: "ap-calc-ab-score-calculator",
    name: "AP Calc AB Score Calculator",
    title: "AP Calculus AB Exam Score Predictor & Curve Calculator",
    category: "edu",
    categoryLabel: "Education",
    icon: "🧮",
    shortIntro: "Estimate your AP Calculus AB exam score with this online calculator. Convert multiple-choice and free-response rubric points into a predicted scaled score of 1 to 5.",
    description: "Convert multiple-choice and FRQ calculus marks into final College Board AP scores.",
    howToUse: [
      "Input your correct Multiple Choice (MC) answers (out of 45 questions).",
      "Enter your earned points for each of the 6 Free Response Questions (FRQ 1-6, out of 9 points each, total 54 points).",
      "Adjust inputs to simulate different testing scenarios.",
      "Review raw points, composite weights, and your projected AP Calculus AB exam score (1-5)."
    ],
    formula: "Composite Score = (MC Correct * 1.2) + (FRQ Total * 1.0) -- total 108 scaled composite points.",
    formulaDesc: "The AP Calculus AB exam weights Multiple Choice (45 questions) and Free Response (6 questions, 54 points) equally. The scaled composite score determines the final AP grade.",
    example: {
      input: "MC Correct: 28/45. FRQ Points: 30/54.",
      output: "Composite Score: ~63.6 | Predicted AP Score: 4",
      explanation: "Multiple choice matches 28 * 1.2 = 33.6 points. FRQs total 30 points. Composite sum equals 63.6 points, which sits in the typical range for a score of 4."
    },
    benefits: [
      "Calibrated to reflect historical College Board grading curves.",
      "Simulate different scores to plan your exam prep effectively.",
      "Helps students see the value of securing partial credit on FRQs.",
      "Fully responsive mobile layout is perfect for study groups or classroom review."
    ],
    detailedGuide: `The Advanced Placement (AP) Calculus AB exam is an excellent way to earn college credit, satisfy general education math requirements, and build a strong foundation for STEM careers.

The exam structure is designed to test your understanding of limits, derivatives, integrals, and the Fundamental Theorem of Calculus:

### Section 1: Multiple Choice
- **Questions:** 45 questions.
- **Duration:** 1 hour and 45 minutes.
- **Weight:** 50% of the total score.
- **Parts:**
  - Part A (30 questions): No calculator allowed.
  - Part B (15 questions): Graphing calculator permitted.

### Section 2: Free Response Questions (FRQs)
- **Questions:** 6 questions of multi-part prompts.
- **Duration:** 1 hour and 30 minutes.
- **Weight:** 50% of the total score (9 points per question, 54 total points).
- **Parts:**
  - Part A (2 questions): Graphing calculator permitted.
  - Part B (4 questions): No calculator allowed.

Our AP Calculus AB Score Calculator helps you project your exam performance. Focus on showing your work, using correct units, and practicing past exams to achieve a high score.`,
    faqs: [
      {
        question: "What raw score is needed to pass with a score of 3 on AP Calculus AB?",
        answer: "Historically, scoring around 40 to 45 composite points (out of 108 total composite points) is enough to capture a passing score of 3 on the AP Calc AB exam."
      },
      {
        question: "How is raw scoring converted into the final 1 to 5 grade?",
        answer: "Your raw multiple-choice correct count is multiplied by 1.2. This is added to your raw FRQ score (0-54) to calculate a composite score from 0-108. The College Board maps this composite score onto 1-5 scaled boundaries."
      },
      {
        question: "How can I maximize my scores on the Calculus FRQs?",
        answer: "Always show your work, write your mathematical equations clearly, define any custom variables, and include units of measurement when requested."
      }
    ],
    relatedTools: [
      { id: "ap-calc-bc-score-calculator", name: "AP Calc BC Score Calculator" },
      { id: "gpa-calculator-no-credits", name: "GPA Calculator No Credits" }
    ],
    conclusion: "Predicting your AP Calculus AB score can help focus your study habits. Target weak areas like integrals or derivatives, practice past FRQs, and aim for a 5."
  },

  "indiana-child-support-calculator": {
    id: "indiana-child-support-calculator",
    name: "Indiana Child Support Calculator",
    title: "Indiana Weekly Child Support Guideline Calculator",
    category: "finance",
    categoryLabel: "Finance",
    icon: "⚖️",
    shortIntro: "Calculate weekly child support obligations according to Indiana state sentencing and child guidelines. Supports weekly parent incomes, childcare credits, and overnight parenting offsets.",
    description: "Determine weekly child support rates matching modern Indiana parenting guidelines.",
    howToUse: [
      "Input Parent A's (non-custodial parent) weekly gross income.",
      "Input Parent B's (custodial parent) weekly gross income.",
      "Select the total number of physical children.",
      "Provide adjustments like prior child support, work-related child care costs, or health insurance premiums.",
      "Define parenting time credits: enter the number of overnight visits (0 to 182) the non-custodial parent has per year.",
      "Click 'Calculate' to see estimated weekly support obligations and proportional shares."
    ],
    formula: "Combined Weekly Income = Parent A Gross Weekly + Parent B Gross Weekly\nBase Weekly Support = MapToIndianaWeeklyTables(Combined Income, Children)\nParent Proportional Share = Base Weekly * (Parent Income / Combined)\nNet Support = Proportional Share - Parenting Time Credit",
    formulaDesc: "Indiana's guideline model calculates child support on a **weekly basis** instead of monthly. Weekly gross incomes are combined, mapped to the parent's base weekly obligation table, and then adjusted based on overnight parenting time credits.",
    example: {
      input: "Parent A Gross: $1,200/wk. Parent B Gross: $800/wk. Children: 1. Parent A has 80 overnights per year.",
      output: "Base Obligation: $240/wk | Parent A Share (60%): $144 | Parenting Time Credit: $25 | Net Parent A Weekly Due: $119",
      explanation: "Parent A represents 60% of combined weekly income. If base support is $240, Parent A's raw weekly share is $144. Deducting a $25 parenting time credit reduces Parent A's estimated weekly payment to $119."
    },
    benefits: [
      "Estimates weekly support metrics based on the official Indiana Guidelines.",
      "Includes parenting time credits for overnight visits.",
      "Maintains clean logging of weekly gross income adjustments.",
      "Provides rapid legal baselines for family budgeting."
    ],
    detailedGuide: `Managing child support calculations is a critical part of family planning following a separation. In the state of Indiana, family courts use the **Indiana Child Support Guidelines** to determine fair weekly child support payments.

Unlike most states that calculate support on a monthly basis, Indiana uses **weekly income and weekly obligations**.

### Proportional Shares of Combined Income
Indiana uses the standard Income Shares Model, which assumes a child should receive the same proportion of parental income as if the household were still intact:
1. **Determine Weekly Gross Income:** Combine weekly gross wages, commissions, self-employment profits, and other taxable income for both parents.
2. **Retrieve Base Support Table Obligation:** Map the combined weekly gross income to the official Indiana Guideline Schedule table based on the number of eligible children to find the base weekly support amount.
3. **Apportion the Weekly Obligation:** Divide the base weekly support obligation proportionally based on each parent's share of the combined weekly income.

### Factoring in Parenting Time Credits
Indiana recognizes that when a non-custodial parent hosts a child overnight, they pay directly for meals, lodging, and utilities. To account for these expenses, families use the **Parenting Time Credit Table**:
- The non-custodial parent receives a weekly financial credit based on the number of overnight visits they host per year (ranging from 52 to 182 overnights).
- This credit is deducted from their base weekly support obligation to calculate the final weekly payment.

Use this calculator to estimate your weekly child support payments under Indiana guidelines.`,
    faqs: [
      {
        question: "How is gross weekly income calculated for self-employed parents in Indiana?",
        answer: "Self-employed parents in Indiana calculate weekly gross income based on total operating revenues minus standard, necessary business expenses, reviewed carefully by the court to ensure compliance."
      },
      {
        question: "What is the threshold for a Parenting Time Credit adjustment?",
        answer: "Indiana awards parenting time credits for any schedule that includes at least 52 overnight visits per year. Surcharges and credits increase proportionally with more overnights, reaching a maximum offset at 181-182 nights."
      },
      {
        question: "How often can Indiana child support orders be modified?",
        answer: "Either parent can request a modification if there has been a substantial and continuous change in circumstances (such as a job loss), or if the existing order is at least 12 months old and the calculated support differs by at least 20% from the current guidelines."
      }
    ],
    relatedTools: [
      { id: "illinois-child-support-calculator", name: "Illinois Child Support Calculator" },
      { id: "capital-gains-tax-calculator", name: "Capital Gains Tax" }
    ],
    conclusion: "Understanding weekly parenting time credits helps Indiana parents budget effectively and ensure fair financial support for their children."
  },

  "volume-of-a-sphere-calculator": {
    id: "volume-of-a-sphere-calculator",
    name: "Volume of a Sphere Calculator",
    title: "Volume of a Sphere Calculator: Free Online Geometry Solver",
    category: "math",
    categoryLabel: "Math",
    icon: "🔵",
    shortIntro: "Calculate the volume and physical surface area of a sphere from the radius, diameter, circumference, or total surface area. Instant conversions across multiple metric and imperial volumetric units.",
    description: "Determine sphere volumetric boundaries and surface dimensions from minimal inputs.",
    howToUse: [
      "Select your Input Source: Radius, Diameter, Circumference, or Surface Area.",
      "Enter the numerical rating value.",
      "Select your measurement unit (Inches, Feet, Centimeters, Millimeters, Meters).",
      "Click 'Calculate' to see sphere Volume and Surface Area displayed in multiple volumetric units, including cubic shapes, liters, and standard gallons."
    ],
    formula: "Volume (V) = (4 / 3) * π * r³\nSurface Area (A) = 4 * π * r²\nWhere r is the radius of the sphere.",
    formulaDesc: "The volume of a sphere measures the total 3D space enclosed within its curved boundaries. It scales with the cube of the radius, meaning minor increases in radius yield massive volume expansions.",
    example: {
      input: "Diameter: 10 inches (Radius: 5 inches).",
      output: "Volume: 523.60 cubic inches (0.30 cubic feet | 8.58 Liters) | Surface Area: 314.16 sq inches",
      explanation: "Radius r = 5. Volume = (4/3) * π * 5³ = (4/3) * π * 125 = 166.67 * π = 523.60. Surface Area = 4 * π * 5² = 100 * π = 314.16."
    },
    benefits: [
      "Invaluable for high school geometry, chemistry labs, and engineering design projects.",
      "Convert raw volume results into liquid units like Liters, Gallons, and Milliliters instantly.",
      "Avoid complex manual calculations with the constant Pi (π).",
      "Highly responsive mobile inputs are fast and easy to navigate."
    ],
    detailedGuide: `Understanding 3D geometry is essential for a wide range of academic and practical applications—from calculating the capacity of spherical storage tanks in mechanical engineering to analyzing fuel cell spheres in physics labs.

A **sphere** is a perfectly symmetrical three-dimensional geometric object. Every point on its outer surface is equidistant from its center point.

### The Cubed Scaling of Volumes
The most critical feature of the sphere volume formula is that the radius ($r$) is **cubed** ($r^3$):
$$V = \\frac{4}{3}\\pi r^3$$
Because the radius is scaled to the third power, minor changes in a sphere's size yield exponential volume gains:
- Doubling a sphere's radius (e.g., from 2 inches to 4 inches) increases the total volume by a factor of eight ($2^3 = 8$).
- Tripling a sphere's radius increases the total volume by a factor of twenty-seven ($3^3 = 27$).

### Practical Applications of Sphere Volumes
Sphere volume calculations are useful in many industries:
- **Culinary Arts:** Estimating the volume of spherical desserts or dough portions.
- **Logistics:** Calculating the space required to pack spherical gears, balls, or industrial ball-bearings.
- **Astronomy:** Estimating the volumes of celestial bodies, stars, and planets by treating them as perfect rotating spheres.

Use our calculator to convert physical dimensions, verify your geometry homework, and explore sphere properties.`,
    faqs: [
      {
        question: "How do you calculate radius from a sphere's circumference?",
        answer: "To find the radius from raw circumference, divide the circumference by 2π (r = C / 2π). Once you have the radius, you can calculate the volume and surface area using standard formulas."
      },
      {
        question: "What is the difference between a circle and a sphere?",
        answer: "A circle is a two-dimensional flat shape on a single plane (it has area but no volume). A sphere is a three-dimensional object that occupies physical space (it has volume and surface area)."
      },
      {
        question: "What real-world objects represent perfect spheres?",
        answer: "Perfect spheres are rare in nature due to physical forces like rotation and gravity. Planets are actually oblate spheroids (slightly flattened at the poles). Highly engineered objects like silicon spheres or specialized ball bearings come closest to perfect spherical symmetry."
      }
    ],
    relatedTools: [
      { id: "feet-and-inches-calculator", name: "Feet & Inches Calculator" },
      { id: "board-and-batten-calculator", name: "Board and Batten" }
    ],
    conclusion: "Ditch the manual calculations and constant Pi rounding. Our Sphere Volume calculator gives you fast, accurate geometry values for any math or engineering project."
  },

  "gpa-calculator-no-credits": {
    id: "gpa-calculator-no-credits",
    name: "GPA Calculator No Credits",
    title: "GPA Calculator No Credits: Simple Average Grade Solver",
    category: "edu",
    categoryLabel: "Education",
    icon: "🎓",
    shortIntro: "Calculate your cumulative Grade Point Average when class credit weights are unavailable or equal. A simple, unweighted GPA calculator designed for rapid, straightforward grade tracking.",
    description: "Determine unweighted school GPA percentages assuming all classes carry the same credit weight.",
    howToUse: [
      "Select your target grading scale representation (standard 4.0 scale).",
      "Enter high-level letter grades for all your classes (simply choose A, B, C, etc. from the drop-down menus).",
      "Add or delete classes from the list as needed.",
      "Review your calculated unweighted GPA, total class count, and average grade percentages instantly."
    ],
    formula: "GPA = Sum of Class Grade Points / Number of Registered Classes",
    formulaDesc: "When class credits are omitted, each course is treated equally (as 1 credit). The grade point values (A=4, B=3, C=2, D=1, F=0) are simply aggregated and divided by the total number of classes.",
    example: {
      input: "4 Classes: A, B, A, C.",
      output: "Total Grade Points: 13 | Classes: 4 | Average GPA: 3.25",
      explanation: "Add up grade points: A (4.0) + B (3.0) + A (4.0) + C (2.0) = 13 total points. Divide by 4 classes: 13 / 4 = 3.25."
    },
    benefits: [
      "Perfect for middle schools, primary schools, or colleges that do not use credit hour systems.",
      "Allows files entries to be compiled in seconds without checking transcript data sheets.",
      "Helps students project their grades easily before final exam weeks.",
      "Fully responsive and mobile-friendly layouts work great on tablets and smartphones."
    ],
    detailedGuide: `Managing your student transcript coordinates shouldn't be a tedious chore. While comprehensive GPA calculations require logging precise class credit hours, many schools, sports associations, and study groups do not use credit weight systems.

In these programs, all classes—from math and science to gym and elective arts—carry the exact same academic weight.

Our **GPA Calculator with No Credits** is designed for these specific scenarios, offering a clean, simple interface to check your academic standing in seconds.

### The Math Behind Simple Academic Averages
When course credits are excluded, the GPA formula simplifies from a weighted average to a classic average of a standard dataset:
1. **Assign Points:** Each letter grade is assigned a numerical value on the standard 4.0 scale (A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0.0).
2. **Sum Points:** Add the grade points for all your registered classes together.
3. **Divide by Class Count:** Divide the total grade points by the total number of classes in your dataset.

This simple calculation gives you an unweighted average of your academic performance, helping you track your progress and set realistic studying goals.`,
    faqs: [
      {
        question: "Can I use this calculator for weighted AP classes?",
        answer: "This specific calculator does not support weighted calculations, as it treats all classes equally. If you are taking Honors, AP, or IB courses, use our primary [High School GPA Calculator](/tools/high-school-gpa-calculator) to factor in those extra weight points."
      },
      {
        question: "Is unweighted GPA without credits accurate for college admissions?",
        answer: "Yes! Many college admissions offices recalculate all applicant GPAs using their own simplified, unweighted 4.0 scale to ensure a fair comparison across different high school grading systems."
      },
      {
        question: "What is a good GPA on a standard 4.0 scale?",
        answer: "A GPA of 3.0 or higher is generally considered good, representing a 'B' average. Competitive colleges often look for GPAs of 3.5 or higher, while elite universities regularly seek applicants with GPAs approaching 4.0."
      }
    ],
    relatedTools: [
      { id: "high-school-gpa-calculator", name: "High School GPA Calculator" },
      { id: "ap-calc-ab-score-calculator", name: "AP Calc AB Score Calculator" }
    ],
    conclusion: "Tracking your grades doesn't have to be complicated. Use our simple No-Credits GPA calculator to monitor your academic progress and stay on path toward your graduation goals."
  },

  "power-to-weight-ratio-calculator": {
    id: "power-to-weight-ratio-calculator",
    name: "Power to Weight Ratio Calculator",
    title: "Power-to-Weight Ratio Calculator (Cars, Bikes & Athletes)",
    category: "health",
    categoryLabel: "Health",
    icon: "⚡",
    shortIntro: "Calculate the power-to-weight ratio for vehicles, race cars, bicycles, or athletes. Convert and compare power outputs in horsepower, kilowatts, or watts against weight in pounds or kilograms.",
    description: "Determine power-to-weight ratio to evaluate relative vehicle acceleration performance and athletic power output.",
    howToUse: [
      "Select your Primary Target Category: Vehicle (Horsepower & Pounds) or Athlete/Bicycle (Watts & Kilograms).",
      "Enter the total Power Output (e.g., engine horsepower of a car, or peak wattage of a cyclist).",
      "Enter the total Weight of the vehicle (including fuel/driver if needed) or athlete's body weight.",
      "Click 'Calculate' to see your ratio displayed in multiple formats, including hp/lb, hp/ton, W/kg, and kW/kg."
    ],
    formula: "Power to Weight Ratio = Power / Weight (expressed in units like hp/lb, hp/ton, W/kg, or W/lb)",
    formulaDesc: "The power-to-weight ratio measures a vehicle's or athlete's performance potential. It divides total power output by total weight, showing how much power is available to accelerate each unit of mass.",
    example: {
      input: "Car with 400 horsepower weighing 3,200 pounds.",
      output: "Ratio: 0.125 hp/lb | 250 hp/ton | 411 W/kg (Sporty enthusiast performance profile)",
      explanation: "Divide power by weight: 400 hp / 3,200 lbs = 0.125 horsepower per pound. Multiplying by 2,000 gives 250 hp per ton."
    },
    benefits: [
      "Compare vehicle performance profiles across different weight classes.",
      "Essential metric for competitive cyclists and triathletes evaluating climbing efficiency.",
      "Eliminates weight class disparities when analyzing race car acceleration.",
      "Highly responsive and mobile-friendly layout works great at the track or gym."
    ],
    detailedGuide: `In the world of racing, cycling, and athletic training, focus often centers on raw power—whether it is the horsepower of a sports car's V8 engine or the peak wattage output of a road cyclist. However, raw power only tells half the story.

The true metric of performance potential is the **Power-to-Weight Ratio**.

### Understanding Acceleration Dynamics
Newton's Second Law of Motion states that force equals mass times acceleration ($F = ma$):
- To accelerate an object faster, you must either increase the force (power) or decrease the mass (weight).
- A heavy vehicle requires massive power just to match the acceleration of a lightweight, nimble sports car with a modest engine.
- In cycling, a lightweight climber generating 300 watts will easily pull away from a heavier rider generating the same 300 watts on steep mountain climbs.

### Vehicle Performance Profiles
Our calculator analyzes your ratio and places vehicles in distinct performance classes:
- **Budget Hatchback:** Below 0.05 hp/lb (~100 hp/ton)
- **Sporty Commuter:** 0.05 to 0.08 hp/lb (100 to 160 hp/ton)
- **Sports Car:** 0.08 to 0.15 hp/lb (160 to 300 hp/ton)
- **Supercar:** 0.15 to 0.25 hp/lb (300 to 500 hp/ton)
- **Hypercar / F1 racer:** Above 0.25 hp/lb (>500 hp/ton)

Use this tool to compare vehicles, evaluate cycling fitness, and optimize performance potential.`,
    faqs: [
      {
        question: "Why is Power-to-Weight ratio so critical for cyclists?",
        answer: "When climbing steep hills, gravity is the primary resistance force. A cyclist's climbing speed depends almost entirely on their power-to-weight ratio (expressed in Watts per Kilogram, or W/kg). High-performance pro climbers often maintain over 6.0 W/kg on long mountain ascents."
      },
      {
        question: "How can I improve my car's power-to-weight ratio?",
        answer: "You can improve the ratio by either increasing engine power (tuning, forced induction) or removing weight (stripping rear seats, installing lightweight carbon fiber body panels, or lightweight racing wheels)."
      },
      {
        question: "Does driver weight impact the power-to-weight ratio?",
        answer: "Yes, absolutely! In lightweight race cars, go-karts, and bicycles, the driver's weight represents a significant percentage of the total mass. For the most accurate calculations, always include the weight of the driver and fuel."
      }
    ],
    relatedTools: [
      { id: "army-height-and-weight-calculator", name: "Army Height & Weight" },
      { id: "steps-to-miles-calculator", name: "Steps to Miles" }
    ],
    conclusion: "Raw power is only half the performance equation. Use our Power-to-Weight calculator to analyze vehicle profiles, optimize athletic efficiency, and reach peak performance."
  }
};
