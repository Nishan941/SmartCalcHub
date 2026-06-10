'use client';

import React, { useState, useMemo } from 'react';
import { Plus, Trash, RotateCcw, HelpCircle, CheckCircle, Calculator, ChevronRight } from 'lucide-react';

interface InteractiveCalculatorProps {
  id: string;
}

export default function InteractiveCalculator({ id }: InteractiveCalculatorProps) {
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
  };

  return (
    <div key={resetKey} className="w-full bg-[#13111a] border border-[#2a273a] rounded-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Accent glow banner */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6ee7b7] via-[#a78bfa] to-[#fbbf24]" />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-[#6ee7b7]" />
          <h3 className="text-sm font-semibold tracking-wider text-[#a78bfa] uppercase">Interactive Widget</h3>
        </div>
        <button 
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition px-3 py-1.5 bg-[#1c1a27] border border-[#2a273a] rounded-lg cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Tool
        </button>
      </div>

      {/* Render calculators based on ID */}
      {id === 'high-school-gpa-calculator' && <HighSchoolGPACalc />}
      {id === 'capital-gains-tax-calculator' && <CapitalGainsTaxCalc />}
      {id === 'steps-to-miles-calculator' && <StepsToMilesCalc />}
      {id === 'p-value-calculator' && <PValueCalc />}
      {id === 'feet-and-inches-calculator' && <FeetAndInchesCalc />}
      {id === 'board-and-batten-calculator' && <BoardAndBattenCalc />}
      {id === 'ap-gov-score-calculator' && <APGovScoreCalc />}
      {id === 'interval-of-convergence-calculator' && <IntervalOfConvergenceCalc />}
      {id === 'ap-chem-score-calculator' && <APChemScoreCalc />}
      {id === 'tree-removal-cost-calculator' && <TreeRemovalCostCalc />}
      {id === 'mean-absolute-deviation-calculator' && <MeanAbsoluteDeviationCalc />}
      {id === 'ap-calc-bc-score-calculator' && <APCalcBCScoreCalc />}
      {id === 'illinois-child-support-calculator' && <IllinoisChildSupportCalc />}
      {id === 'army-height-and-weight-calculator' && <ArmyHeightAndWeightCalc />}
      {id === 'ap-calc-ab-score-calculator' && <APCalcABScoreCalc />}
      {id === 'indiana-child-support-calculator' && <IndianaChildSupportCalc />}
      {id === 'volume-of-a-sphere-calculator' && <VolumeOfSphereCalc />}
      {id === 'gpa-calculator-no-credits' && <GPACalculatorNoCreditsCalc />}
      {id === 'power-to-weight-ratio-calculator' && <PowerToWeightRatioCalc />}
    </div>
  );
}

// ============================================
// 1. HIGH SCHOOL GPA CALCULATOR COMPONENT
// ============================================
function HighSchoolGPACalc() {
  const [courses, setCourses] = useState([
    { id: '1', name: 'AP English', grade: 'A', credits: 1, type: 'ap' },
    { id: '2', name: 'Honors Chemistry', grade: 'B', credits: 1, type: 'honors' },
    { id: '3', name: 'Regular Math', grade: 'A', credits: 1, type: 'regular' }
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: Date.now().toString(), name: 'New Course', grade: 'A', credits: 1, type: 'regular' }]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: string, field: string, value: any) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const gradePoints: Record<string, number> = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0 };

  const results = useMemo(() => {
    let totalCredits = 0;
    let totalUnweightedPoints = 0;
    let totalWeightedPoints = 0;

    courses.forEach(c => {
      const gPoints = gradePoints[c.grade] ?? 0;
      const credit = Number(c.credits) || 0;
      totalCredits += credit;
      totalUnweightedPoints += gPoints * credit;
      
      let extraWeight = 0;
      if (c.type === 'honors') extraWeight = 0.5;
      else if (c.type === 'ap') extraWeight = 1.0;
      
      totalWeightedPoints += (gPoints + extraWeight) * credit;
    });

    const unweightedGPA = totalCredits > 0 ? (totalUnweightedPoints / totalCredits) : 0;
    const weightedGPA = totalCredits > 0 ? (totalWeightedPoints / totalCredits) : 0;

    return { unweightedGPA, weightedGPA, totalCredits };
  }, [courses]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-[#1a1827] rounded-xl p-4 border border-[#2d2a44] text-center">
          <span className="block text-xs text-slate-400 mb-1">Unweighted GPA</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">{results.unweightedGPA.toFixed(2)}</span>
        </div>
        <div className="bg-[#1a1827] rounded-xl p-4 border border-[#2d2a44] text-center">
          <span className="block text-xs text-slate-400 mb-1">Weighted GPA</span>
          <span className="text-3xl font-extrabold text-[#a78bfa]">{results.weightedGPA.toFixed(2)}</span>
        </div>
        <div className="bg-[#1a1827] rounded-xl p-4 border border-[#2d2a44] text-center">
          <span className="block text-xs text-slate-400 mb-1">Total Credits</span>
          <span className="text-3xl font-extrabold text-[#fbbf24]">{results.totalCredits}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="hidden md:grid grid-cols-12 gap-2 text-xs font-semibold text-slate-400 px-2 uppercase tracking-wider">
          <div className="col-span-4">Course Name</div>
          <div className="col-span-2">Grade</div>
          <div className="col-span-2">Credits</div>
          <div className="col-span-3">Type</div>
          <div className="col-span-1">Action</div>
        </div>

        {courses.map(c => (
          <div key={c.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 p-3 bg-[#171523] border border-[#26233a] rounded-xl items-center relative">
            <div className="col-span-4">
              <input 
                type="text" 
                value={c.name}
                onChange={e => updateCourse(c.id, 'name', e.target.value)}
                className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
                placeholder="e.g. English Literature"
              />
            </div>
            
            <div className="col-span-2">
              <select 
                value={c.grade} 
                onChange={e => updateCourse(c.id, 'grade', e.target.value)}
                className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
              >
                {['A', 'B', 'C', 'D', 'F'].map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="col-span-2">
              <input 
                type="number" 
                min="0.5" 
                max="10" 
                step="0.5"
                value={c.credits}
                onChange={e => updateCourse(c.id, 'credits', parseFloat(e.target.value) || 0)}
                className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
              />
            </div>

            <div className="col-span-3">
              <select 
                value={c.type}
                onChange={e => updateCourse(c.id, 'type', e.target.value)}
                className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
              >
                <option value="regular">Regular (4.0 Scale)</option>
                <option value="honors">Honors (+0.5 Weight)</option>
                <option value="ap">AP / IB (+1.0 Weight)</option>
              </select>
            </div>

            <div className="col-span-1 text-right mt-2 md:mt-0">
              <button 
                onClick={() => removeCourse(c.id)}
                className="p-2 text-red-400 hover:text-red-300 bg-red-950/20 hover:bg-red-950/40 border border-red-900/30 rounded-lg cursor-pointer transition"
              >
                <Trash className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={addCourse}
        className="flex items-center gap-1.5 px-4 py-2 bg-[#6ee7b7] hover:bg-[#59ca9f] text-[#0a0a0f] font-semibold text-sm rounded-xl cursor-pointer transition shadow-[#6ee7b7]/10 shadow-lg"
      >
        <Plus className="w-4 h-4" /> Add Course Row
      </button>
    </div>
  );
}

// ============================================
// 2. CAPITAL GAINS TAX CALCULATOR COMPONENT
// ============================================
function CapitalGainsTaxCalc() {
  const [filingStatus, setFilingStatus] = useState('single');
  const [ordinaryIncome, setOrdinaryIncome] = useState(65000);
  const [purchasePrice, setPurchasePrice] = useState(25000);
  const [salePrice, setSalePrice] = useState(75000);
  const [txCosts, setTxCosts] = useState(2500);
  const [holdingPeriod, setHoldingPeriod] = useState('long'); // short, long

  const report = useMemo(() => {
    const grossGain = salePrice - purchasePrice;
    const netGain = Math.max(0, grossGain - txCosts);
    
    let taxRate = 0;
    if (holdingPeriod === 'long') {
      // Long term capital gains tax brackets 2026/standard
      const totalIncome = ordinaryIncome + netGain;
      if (filingStatus === 'single') {
        if (totalIncome <= 44625) taxRate = 0;
        else if (totalIncome <= 492300) taxRate = 0.15;
        else taxRate = 0.20;
      } else { // married joint
        if (totalIncome <= 89250) taxRate = 0;
        else if (totalIncome <= 553850) taxRate = 0.15;
        else taxRate = 0.20;
      }
    } else {
      // Short-term: ordinary income tax rates estimation (brackets standard 10%-37%, simplified average)
      if (ordinaryIncome <= 44625) taxRate = 0.12;
      else if (ordinaryIncome <= 95375) taxRate = 0.22;
      else if (ordinaryIncome <= 182100) taxRate = 0.24;
      else taxRate = 0.32;
    }

    const estimatedTax = netGain * taxRate;
    const netProceeds = salePrice - txCosts - estimatedTax;

    return { grossGain, netGain, taxRate, estimatedTax, netProceeds };
  }, [filingStatus, ordinaryIncome, purchasePrice, salePrice, txCosts, holdingPeriod]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Filing Status</label>
            <select 
              value={filingStatus}
              onChange={e => setFilingStatus(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              <option value="single">Single Filer</option>
              <option value="married">Married (Jointly)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Holding Term</label>
            <div className="flex bg-[#1e1c2e] p-1 border border-[#2a273c] rounded-xl">
              <button 
                onClick={() => setHoldingPeriod('short')}
                className={`flex-1 py-1 text-xs rounded-lg cursor-pointer ${holdingPeriod === 'short' ? 'bg-[#a78bfa] text-white' : 'text-slate-400'}`}
              >
                Short (&le;1yr)
              </button>
              <button 
                onClick={() => setHoldingPeriod('long')}
                className={`flex-1 py-1 text-xs rounded-lg cursor-pointer ${holdingPeriod === 'long' ? 'bg-[#a78bfa] text-white' : 'text-slate-400'}`}
              >
                Long (&gt;1yr)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Purchase Price ($)</label>
            <input 
              type="number" 
              value={purchasePrice}
              onChange={e => setPurchasePrice(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Sale Price ($)</label>
            <input 
              type="number" 
              value={salePrice}
              onChange={e => setSalePrice(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Selling/Tx Costs ($)</label>
            <input 
              type="number" 
              value={txCosts}
              onChange={e => setTxCosts(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Annual Income ($)</label>
            <input 
              type="number" 
              value={ordinaryIncome}
              onChange={e => setOrdinaryIncome(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] rounded-xl p-5 flex flex-col justify-between">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-[#2a273a] pb-2 mb-4">Calculation Output</h4>
        <div className="space-y-3 flex-1">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Gross Gain:</span>
            <span className="font-semibold text-white">${report.grossGain.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Taxable Net Gain:</span>
            <span className="font-semibold text-[#fbbf24]">${report.netGain.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-400">Estimated Tax Rate:</span>
            <span className="font-semibold text-[#a78bfa]">{(report.taxRate * 100).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between text-[#ef4444] font-semibold items-center text-sm border-t border-[#26233a] pt-2">
            <span>Estimated Tax:</span>
            <span>-${report.estimatedTax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
        </div>

        <div className="bg-[#1e1c2e] border border-[#2a273a] rounded-xl p-4 mt-4 text-center">
          <span className="block text-xs text-slate-400 mb-1">Net Proceeds Recalled</span>
          <span className="text-2xl font-bold text-[#6ee7b7]">${report.netProceeds.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 3. STEPS TO MILES CALCULATOR COMPONENT
// ============================================
function StepsToMilesCalc() {
  const [steps, setSteps] = useState(10000);
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState(70); // inches

  const results = useMemo(() => {
    // 0.415 factor for male, 0.413 for female stride length
    const factor = gender === 'male' ? 0.415 : 0.413;
    const strideLength = height * factor; // inches
    const totalInches = steps * strideLength;
    const miles = totalInches / 63360;
    const kilometers = miles * 1.60934;
    const minutes = steps / 100; // at average brisk 100 steps/minute
    const calories = steps * 0.04; // estimating standard 0.04 calories/step

    return { strideLength, miles, kilometers, minutes, calories };
  }, [steps, gender, height]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Daily Step Count</label>
          <input 
            type="number" 
            value={steps} 
            onChange={e => setSteps(Math.max(0, parseInt(e.target.value) || 0))}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-4 py-2.5 text-base font-bold text-white focus:border-[#6ee7b7] outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Gender</label>
            <select 
              value={gender}
              onChange={e => setGender(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Height (Inches)</label>
            <input 
              type="number" 
              value={height}
              onChange={e => setHeight(Math.max(20, parseInt(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 grid grid-cols-2 gap-3">
        <div className="bg-[#171523] border border-[#26233a] p-4 rounded-xl text-center flex flex-col justify-center">
          <span className="text-xs text-slate-400 mb-0.5">Estimated Distance</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">
            {results.miles.toFixed(2)} <span className="text-sm font-normal">miles</span>
          </span>
          <span className="text-xs text-slate-500 mt-1">({results.kilometers.toFixed(2)} km)</span>
        </div>
        <div className="bg-[#171523] border border-[#26233a] p-4 rounded-xl text-center flex flex-col justify-center">
          <span className="text-xs text-slate-400 mb-0.5">Calories Burned</span>
          <span className="text-3xl font-extrabold text-[#a78bfa]">
            {results.calories.toFixed(0)} <span className="text-sm font-normal">kcal</span>
          </span>
        </div>
        <div className="bg-[#171523] border border-[#26233a] p-4 rounded-xl text-center flex flex-col justify-center">
          <span className="text-xs text-slate-400 mb-0.5">Calculated Stride</span>
          <span className="text-xl font-bold text-white">{results.strideLength.toFixed(1)} inches</span>
        </div>
        <div className="bg-[#171523] border border-[#26233a] p-4 rounded-xl text-center flex flex-col justify-center">
          <span className="text-xs text-slate-400 mb-0.5">Duration Estimate</span>
          <span className="text-xl font-bold text-[#fbbf24]">{results.minutes.toFixed(0)} minutes</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 4. P-VALUE CALCULATOR COMPONENT
// ============================================
function PValueCalc() {
  const [testType, setTestType] = useState('z'); // z, t
  const [score, setScore] = useState(2.1);
  const [df, setDf] = useState(15);
  const [tails, setTails] = useState('two'); // left, right, two
  const [alpha, setAlpha] = useState(0.05);

  const results = useMemo(() => {
    // Normal Approximation (Z-Score approximation formula)
    const zAbs = Math.abs(score);
    // Standard normal CDF approximation (Abramowitz & Stegun formula)
    const t = 1 / (1 + 0.2316419 * zAbs);
    const d = 0.3989423 * Math.exp(-zAbs * zAbs / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.7814779 + t * (-1.821256 + t * 1.330274))));
    const cdf = score > 0 ? 1 - prob : prob;

    let pVal = 0.05;
    if (testType === 'z') {
      if (tails === 'left') pVal = cdf;
      else if (tails === 'right') pVal = 1 - cdf;
      else pVal = 2 * (score > 0 ? 1 - cdf : cdf);
    } else {
      // Basic Student-T P-value approximation with degrees of freedom
      // F-ratio / standard t mapping approximation
      const factor = 1 + (score * score) / df;
      let alphaApprox = Math.pow(factor, - (df + 1) / 2);
      if (tails === 'two') {
        pVal = Math.min(1, alphaApprox);
      } else {
        pVal = Math.min(1, alphaApprox / 2);
      }
    }

    pVal = Math.max(0, Math.min(1, pVal));
    const significant = pVal <= alpha;

    return { pVal, significant };
  }, [testType, score, df, tails, alpha]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Distribution</label>
            <select 
              value={testType}
              onChange={e => setTestType(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              <option value="z">Z-Score (Normal)</option>
              <option value="t">T-Score (Student-T)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Tail Direction</label>
            <select 
              value={tails}
              onChange={e => setTails(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              <option value="two">Two-Tailed (A &ne; B)</option>
              <option value="left">One-Tailed Left (A &lt; B)</option>
              <option value="right">One-Tailed Right (A &gt; B)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Calculated Score</label>
            <input 
              type="number" 
              step="0.01"
              value={score}
              onChange={e => setScore(parseFloat(e.target.value) || 0)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Significance (&alpha;)</label>
            <input 
              type="number" 
              step="0.01"
              min="0.01"
              max="0.5"
              value={alpha}
              onChange={e => setAlpha(parseFloat(e.target.value) || 0.05)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        {testType === 't' && (
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Degrees of Freedom (DF)</label>
            <input 
              type="number" 
              value={df}
              onChange={e => setDf(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        )}
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Calculated Probability</span>
          <span className="text-4xl font-extrabold text-[#6ee7b7] tracking-tighter">
            {results.pVal.toFixed(5)}
          </span>
          <span className="block text-xs text-slate-500 mt-1">p-value</span>
        </div>

        <div className={`mt-6 p-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 ${results.significant ? 'bg-[#0f2e22] border-[#22c55e]/20 text-[#6ee7b7]' : 'bg-[#2a1b1b] border-[#ef4444]/20 text-red-300'}`}>
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          <span>
            {results.significant 
              ? `Significant: Reject Null Hypothesis (P < ${alpha})` 
              : `Insignificant: Fail to Reject Null (P >= ${alpha})`
            }
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 5. FEET AND INCHES CALCULATOR COMPONENT
// ============================================
function FeetAndInchesCalc() {
  const [ft1, setFt1] = useState(5);
  const [in1, setIn1] = useState(10);
  const [frac1, setFrac1] = useState(0); // 0, 0.25, 0.5, 0.75
  const [op, setOp] = useState('+');
  const [ft2, setFt2] = useState(2);
  const [in2, setIn2] = useState(4);
  const [frac2, setFrac2] = useState(0);

  const results = useMemo(() => {
    const totalInches1 = (ft1 * 12) + in1 + frac1;
    const totalInches2 = (ft2 * 12) + in2 + frac2;
    
    let ansInches = 0;
    if (op === '+') ansInches = totalInches1 + totalInches2;
    else if (op === '-') ansInches = totalInches1 - totalInches2;
    else if (op === '*') ansInches = totalInches1 * totalInches2;
    else if (op === '/') ansInches = totalInches2 > 0 ? totalInches1 / totalInches2 : 0;

    const ansFeetTotal = ansInches / 12;
    const finalFt = Math.floor(ansFeetTotal);
    const remInchesTotal = ansInches - (finalFt * 12);
    const finalIn = Math.floor(remInchesTotal);
    const remInchesFraction = remInchesTotal - finalIn;

    // Fractional estimate
    let fracLabel = '';
    if (remInchesFraction >= 0.125 && remInchesFraction < 0.375) fracLabel = ' 1/4';
    else if (remInchesFraction >= 0.375 && remInchesFraction < 0.625) fracLabel = ' 1/2';
    else if (remInchesFraction >= 0.625 && remInchesFraction < 0.875) fracLabel = ' 3/4';
    else if (remInchesFraction >= 0.875) fracLabel = ' +1';

    return {
      ansInches,
      ansFeetTotal,
      compoundPhrase: `${finalFt} ft ${finalIn}${fracLabel} in`,
      meters: ansInches * 0.0254
    };
  }, [ft1, in1, frac1, op, ft2, in2, frac2]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-11 gap-2 items-center">
        {/* Quantity 1 */}
        <div className="md:col-span-4 bg-[#171523] p-3 rounded-xl border border-[#2a273a] space-y-2">
          <span className="text-xs text-slate-400 block mb-1 font-bold uppercase tracking-wider">Dimension 1</span>
          <div className="grid grid-cols-3 gap-2">
            <input 
              type="number" placeholder="Ft" 
              value={ft1} onChange={e => setFt1(Math.max(0, parseInt(e.target.value) || 0))} 
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1.5 text-sm text-center text-white"
            />
            <input 
              type="number" placeholder="In" 
              value={in1} onChange={e => setIn1(Math.max(0, parseInt(e.target.value) || 0))} 
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1.5 text-sm text-center text-white"
            />
            <select 
              value={frac1} onChange={e => setFrac1(parseFloat(e.target.value))}
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-1 py-1.5 text-xs text-center text-white"
            >
              <option value="0">0</option>
              <option value="0.25">1/4</option>
              <option value="0.5">1/2</option>
              <option value="0.75">3/4</option>
            </select>
          </div>
        </div>

        {/* Operator */}
        <div className="md:col-span-1 text-center font-bold">
          <select 
            value={op} onChange={e => setOp(e.target.value)}
            className="bg-[#1c1a27] border border-[#2a273c] rounded-xl px-3 py-3 text-lg font-bold text-center text-[#ffcb24] outline-none"
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">&times;</option>
            <option value="/">&divide;</option>
          </select>
        </div>

        {/* Quantity 2 */}
        <div className="md:col-span-4 bg-[#171523] p-3 rounded-xl border border-[#2a273a] space-y-2">
          <span className="text-xs text-slate-400 block mb-1 font-bold uppercase tracking-wider">Dimension 2</span>
          <div className="grid grid-cols-3 gap-2">
            <input 
              type="number" placeholder="Ft" 
              value={ft2} onChange={e => setFt2(Math.max(0, parseInt(e.target.value) || 0))} 
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1.5 text-sm text-center text-white"
            />
            <input 
              type="number" placeholder="In" 
              value={in2} onChange={e => setIn2(Math.max(0, parseInt(e.target.value) || 0))} 
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1.5 text-sm text-center text-white"
            />
            <select 
              value={frac2} onChange={e => setFrac2(parseFloat(e.target.value))}
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-1 py-1.5 text-xs text-center text-white"
            >
              <option value="0">0</option>
              <option value="0.25">1/4</option>
              <option value="0.5">1/2</option>
              <option value="0.75">3/4</option>
            </select>
          </div>
        </div>

        {/* CTA equal - visual spacer */}
        <div className="md:col-span-2 text-center text-xl font-bold text-slate-400 hidden md:block">
          =
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#171424] to-[#1e1933] border border-[#302b4d] rounded-2xl p-6 text-center">
        <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2">Calculated Compound Length</span>
        <span className="text-4xl font-extrabold text-[#6ee7b7] block tracking-tight">
          {results.compoundPhrase}
        </span>
        <div className="grid grid-cols-3 gap-4 mt-4 border-t border-[#312c4e] pt-4 text-xs text-slate-400">
          <div>
            <span>Total Inches</span>
            <span className="block mt-1 font-bold text-white text-sm">{results.ansInches.toFixed(2)} in</span>
          </div>
          <div>
            <span>Decimal Feet</span>
            <span className="block mt-1 font-bold text-white text-sm">{results.ansFeetTotal.toFixed(3)} ft</span>
          </div>
          <div>
            <span>Metric Equivalent</span>
            <span className="block mt-1 font-bold text-white text-sm">{results.meters.toFixed(3)} m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 6. BOARD AND BATTEN CALCULATOR COMPONENT
// ============================================
function BoardAndBattenCalc() {
  const [wallWidth, setWallWidth] = useState(120);
  const [battenWidth, setBattenWidth] = useState(3.5);
  const [battenCount, setBattenCount] = useState(6);
  const [includeBorders, setIncludeBorders] = useState(true);

  const results = useMemo(() => {
    const totalBattenWidth = battenCount * battenWidth;
    const remainingSpace = wallWidth - totalBattenWidth;
    
    // Spacing divisor
    const spacingCount = includeBorders ? (battenCount - 1) : (battenCount + 1);
    const individualSpacing = remainingSpace > 0 && spacingCount > 0 ? remainingSpace / spacingCount : 0;

    // Coordinate listings
    const coordinates: number[] = [];
    if (includeBorders) {
      for (let i = 0; i < battenCount; i++) {
        coordinates.push(i * (battenWidth + individualSpacing));
      }
    } else {
      for (let i = 1; i <= battenCount; i++) {
        coordinates.push((i * individualSpacing) + ((i - 1) * battenWidth));
      }
    }

    return { individualSpacing, totalBattenWidth, coordinates, remainingSpace };
  }, [wallWidth, battenWidth, battenCount, includeBorders]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Wall Width (inches)</label>
          <input 
            type="number" value={wallWidth} 
            onChange={e => setWallWidth(Math.max(10, parseFloat(e.target.value) || 0))}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Batten Width</label>
            <input 
              type="number" step="0.1" value={battenWidth} 
              onChange={e => setBattenWidth(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Number of Battens</label>
            <input 
              type="number" value={battenCount} 
              onChange={e => setBattenCount(Math.max(2, parseInt(e.target.value) || 2))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Include End Borders?</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input 
                type="radio" checked={includeBorders === true} 
                onChange={() => setIncludeBorders(true)} 
                className="accent-[#6ee7b7]"
              />
              Yes, frame both corners
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-300 cursor-pointer">
              <input 
                type="radio" checked={includeBorders === false} 
                onChange={() => setIncludeBorders(false)} 
                className="accent-[#6ee7b7]"
              />
              No, empty spacing ends
            </label>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 bg-[#171523] border border-[#26233a] rounded-2xl p-5 space-y-4">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-wider block mb-0.5">Calculated Spacing Size</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">
            {results.individualSpacing.toFixed(3)} <span className="text-sm font-normal text-slate-400">inches</span>
          </span>
        </div>

        <div className="border-t border-[#2a273a] pt-3 text-xs text-slate-400 space-y-2">
          <div className="flex justify-between">
            <span>Wall space taken by wood:</span>
            <span className="text-white font-medium">{results.totalBattenWidth.toFixed(1)} inches</span>
          </div>
          
          <span className="block mt-4 font-semibold text-white uppercase tracking-wider text-[10px]">Batten Start Points Coordinates (From absolute left corner)</span>
          <div className="max-h-[140px] overflow-y-auto bg-[#1e1c2e] dev-coords p-2.5 rounded-lg border border-[#26233a] font-mono grid grid-cols-2 gap-2 text-[11px] text-[#fbbf24]">
            {results.coordinates.map((coord, idx) => (
              <div key={idx} className="flex justify-between px-1.5 border-b border-[#2d2942]/60 py-0.5">
                <span className="text-slate-500">Batten #{idx+1} :</span>
                <span>{coord.toFixed(2)}&quot;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 7. AP GOV SCORE CALCULATOR COMPONENT
// ============================================
function APGovScoreCalc() {
  const [mcCorrect, setMcCorrect] = useState(42);
  const [frq1, setFrq1] = useState(2); // out of 3
  const [frq2, setFrq2] = useState(3); // out of 4
  const [frq3, setFrq3] = useState(3); // out of 4
  const [frq4, setFrq4] = useState(4); // out of 6

  const results = useMemo(() => {
    const rawMC = mcCorrect;
    const rawFRQ = frq1 + frq2 + frq3 + frq4;

    // Weight formulas standardized to a 120 composite points total (50% each)
    const mcWeighted = rawMC * 1.0909; 
    const frqWeighted = rawFRQ * 3.5294; // 60 composite scale / 17 raw marks
    const compositeScore = Math.min(120, mcWeighted + frqWeighted);

    let apGrade = 1;
    if (compositeScore >= 88) apGrade = 5;
    else if (compositeScore >= 74) apGrade = 4;
    else if (compositeScore >= 58) apGrade = 3;
    else if (compositeScore >= 42) apGrade = 2;

    return { rawFRQ, compositeScore, apGrade };
  }, [mcCorrect, frq1, frq2, frq3, frq4]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Multiple Choice (Score out of 55)</label>
          <input 
            type="range" min="0" max="55" value={mcCorrect} 
            onChange={e => setMcCorrect(parseInt(e.target.value) || 0)}
            className="w-full accent-[#6ee7b7]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 Correct</span>
            <span className="text-[#6ee7b7] text-sm">{mcCorrect} / 55 correct</span>
            <span>55 Correct</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-[#a78bfa] mb-1.5 uppercase">FRQ 1 (Concept /3)</label>
            <input 
              type="number" min="0" max="3" value={frq1}
              onChange={e => setFrq1(Math.min(3, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#a78bfa] mb-1.5 uppercase">FRQ 2 (Math Data /4)</label>
            <input 
              type="number" min="0" max="4" value={frq2}
              onChange={e => setFrq2(Math.min(4, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#a78bfa] mb-1.5 uppercase">FRQ 3 (SCOTUS Comparison /4)</label>
            <input 
              type="number" min="0" max="4" value={frq3}
              onChange={e => setFrq3(Math.min(4, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#a78bfa] mb-1.5 uppercase">FRQ 4 (Essay /6)</label>
            <input 
              type="number" min="0" max="6" value={frq4}
              onChange={e => setFrq4(Math.min(6, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] rounded-2xl p-6 flex flex-col justify-between text-center items-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2">Projected AP Score</span>
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1b172a] to-[#2d254b] border-2 border-[#a78bfa] flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-[#a78bfa]/10">
            {results.apGrade}
          </div>
        </div>

        <div className="w-full mt-6 space-y-2 border-t border-[#2a273a] pt-4 text-xs text-slate-400">
          <div className="flex justify-between">
            <span>FRQ Rubric points:</span>
            <span className="text-white font-medium">{results.rawFRQ} / 17</span>
          </div>
          <div className="flex justify-between">
            <span>Overall scaled points:</span>
            <span className="text-[#fbbf24] font-medium">{results.compositeScore.toFixed(1)} / 120</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 8. INTERVAL OF CONVERGENCE CALCULATOR COMPONENT
// ============================================
function IntervalOfConvergenceCalc() {
  const [center, setCenter] = useState(0);
  const [radiusFactor, setRadiusFactor] = useState(3);
  const [convergeLeft, setConvergeLeft] = useState('open'); // open, closed
  const [convergeRight, setConvergeRight] = useState('open'); // open, closed

  const results = useMemo(() => {
    const leftVal = center - radiusFactor;
    const rightVal = center + radiusFactor;
    
    const bracketLeft = convergeLeft === 'closed' ? '[' : '(';
    const bracketRight = convergeRight === 'closed' ? ']' : ')';

    return { leftVal, rightVal, bracketLeft, bracketRight };
  }, [center, radiusFactor, convergeLeft, convergeRight]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Center of Convergence (c)</label>
          <input 
            type="number" value={center} 
            onChange={e => setCenter(parseFloat(e.target.value) || 0)}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Radius of Convergence (R)</label>
          <input 
            type="number" min="0.1" step="0.1" value={radiusFactor} 
            onChange={e => setRadiusFactor(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Left Endpoint (x = {results.leftVal})</label>
            <select 
              value={convergeLeft} 
              onChange={e => setConvergeLeft(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-2 py-2 text-xs text-white"
            >
              <option value="open">Diverges (Open bracket)</option>
              <option value="closed">Converges (Closed bracket)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Right Endpoint (x = {results.rightVal})</label>
            <select 
              value={convergeRight} 
              onChange={e => setConvergeRight(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-2 py-2 text-xs text-white"
            >
              <option value="open">Diverges (Open bracket)</option>
              <option value="closed">Converges (Closed bracket)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl text-center flex flex-col justify-center items-center">
        <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2">Calculated Interval</span>
        <span className="text-3xl font-black text-[#fbbf24] tracking-wider">
          {results.bracketLeft}{results.leftVal}, {results.rightVal}
          {results.bracketRight}
        </span>
        <span className="text-xs text-slate-500 mt-2 block">All real numbers x inside these boundaries converge.</span>
      </div>
    </div>
  );
}

// ============================================
// 9. AP CHEM SCORE CALCULATOR COMPONENT
// ============================================
function APChemScoreCalc() {
  const [mcCorrect, setMcCorrect] = useState(45);
  const [frqLongPoints, setFrqLongPoints] = useState(22); // out of 30
  const [frqShortPoints, setFrqShortPoints] = useState(12); // out of 16

  const results = useMemo(() => {
    const rawMC = mcCorrect;
    const rawFRQ = frqLongPoints + frqShortPoints;

    // Standard scaling weights
    const mcWeighted = rawMC * 0.833; // 50 points scaled max / 60 questions
    const frqWeighted = rawFRQ * 1.087; // 50 points scaled max / 46 marks
    const compositeScore = Math.min(100, mcWeighted + frqWeighted);

    let apGrade = 1;
    if (compositeScore >= 72) apGrade = 5;
    else if (compositeScore >= 58) apGrade = 4;
    else if (compositeScore >= 45) apGrade = 3;
    else if (compositeScore >= 32) apGrade = 2;

    return { rawFRQ, compositeScore, apGrade };
  }, [mcCorrect, frqLongPoints, frqShortPoints]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Multiple Choice (Score out of 60)</label>
          <input 
            type="range" min="0" max="60" value={mcCorrect} 
            onChange={e => setMcCorrect(parseInt(e.target.value) || 0)}
            className="w-full accent-[#6ee7b7]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 Correct</span>
            <span className="text-[#6ee7b7] text-sm">{mcCorrect} / 60 marks</span>
            <span>60 Correct</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Long FRQs (Q1-3, Out of 30)</label>
            <input 
              type="number" min="0" max="30" value={frqLongPoints}
              onChange={e => setFrqLongPoints(Math.min(30, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Short FRQs (Q4-7, Out of 16)</label>
            <input 
              type="number" min="0" max="16" value={frqShortPoints}
              onChange={e => setFrqShortPoints(Math.min(16, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-center text-white"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] rounded-2xl p-6 flex flex-col justify-between text-center items-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2">Predicted AP Grade</span>
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#14231f] to-[#1e3d30] border-2 border-[#6ee7b7] flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-[#6ee7b7]/10">
            {results.apGrade}
          </div>
        </div>

        <div className="w-full mt-6 space-y-2 border-t border-[#2a273a] pt-4 text-xs text-slate-400">
          <div className="flex justify-between">
            <span>FRQ Rubric Total:</span>
            <span className="text-white font-medium">{results.rawFRQ} / 46</span>
          </div>
          <div className="flex justify-between">
            <span>Composite percentage:</span>
            <span className="text-[#fbbf24] font-medium">{results.compositeScore.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 10. TREE REMOVAL COST CALCULATOR COMPONENT
// ============================================
function TreeRemovalCostCalc() {
  const [heightGroup, setHeightGroup] = useState('medium'); // small, medium, large, epic
  const [diameter, setDiameter] = useState(14); // inches
  const [access, setAccess] = useState('moderate'); // easy, moderate, difficult
  const [hazard, setHazard] = useState('yes'); // no, yes
  const [stumpRemoval, setStumpRemoval] = useState(true);

  const cost = useMemo(() => {
    let basePrice = 250;
    if (heightGroup === 'medium') basePrice = 550;
    else if (heightGroup === 'large') basePrice = 950;
    else if (heightGroup === 'epic') basePrice = 1600;

    const diameterSurcharge = diameter * 12; // $12 per inch of trunk thickness
    let multiplier = 1.0;
    if (access === 'moderate') multiplier = 1.15;
    else if (access === 'difficult') multiplier = 1.35;

    let hazardMultiplier = 1.0;
    if (hazard === 'yes') hazardMultiplier = 1.25;

    const stumpFee = stumpRemoval ? 180 + (diameter * 5) : 0;

    const totalEstimate = (basePrice + diameterSurcharge) * multiplier * hazardMultiplier + stumpFee;

    return {
      average: totalEstimate,
      lowRange: totalEstimate * 0.85,
      highRange: totalEstimate * 1.15
    };
  }, [heightGroup, diameter, access, hazard, stumpRemoval]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Tree Height Category</label>
            <select 
              value={heightGroup} 
              onChange={e => setHeightGroup(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              <option value="small">Small (under 30 ft)</option>
              <option value="medium">Medium (30 - 60 ft)</option>
              <option value="large">Large (60 - 80 ft)</option>
              <option value="epic">Epic (over 80 ft)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Trunk Diameter (inches)</label>
            <input 
              type="number" value={diameter} 
              onChange={e => setDiameter(Math.max(2, parseInt(e.target.value) || 2))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Yard Access Path</label>
            <select 
              value={access} 
              onChange={e => setAccess(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white"
            >
              <option value="easy">Easy (Open Lawn)</option>
              <option value="moderate">Moderate (Some Obstacles)</option>
              <option value="difficult">Difficult (Fences/Gardens)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Heavy Hazard (Power Lines?)</label>
            <select 
              value={hazard} 
              onChange={e => setHazard(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white"
            >
              <option value="no">No Hazards</option>
              <option value="yes">Yes, Near lines/structures</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm text-slate-300 font-medium cursor-pointer mt-2">
            <input 
              type="checkbox" checked={stumpRemoval} 
              onChange={e => setStumpRemoval(e.target.checked)}
              className="accent-[#6ee7b7] w-4 h-4 rounded"
            />
            Need stump removal & grinding?
          </label>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center">
        <div>
          <span className="text-xs text-slate-300 uppercase tracking-widest block mb-1">Estimated Cost Average</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">
            ${cost.average.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
          <span className="block text-xs text-slate-500 mt-2">Custom calculated bid baseline</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 border-t border-[#2a273a] pt-4 text-xs text-slate-400 text-center">
          <div>
            <span>Low Estimate</span>
            <span className="block text-sm font-bold text-white mt-0.5">${cost.lowRange.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div>
            <span>High Estimate</span>
            <span className="block text-sm font-bold text-white mt-0.5">${cost.highRange.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 11. MEAN ABSOLUTE DEVIATION CALCULATOR COMPONENT
// ============================================
function MeanAbsoluteDeviationCalc() {
  const [rawText, setRawText] = useState('10, 15, 12, 18, 20, 22');

  const stats = useMemo(() => {
    // Parser
    const numbers = rawText
      .split(/[\s,;\n]+/)
      .map(t => parseFloat(t))
      .filter(n => !isNaN(n));

    if (numbers.length === 0) {
      return { numbers: [], mean: 0, mad: 0, deviations: [] };
    }

    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const deviations = numbers.map(num => ({
      val: num,
      diff: num - mean,
      absDiff: Math.abs(num - mean)
    }));

    const mad = deviations.reduce((sum, d) => sum + d.absDiff, 0) / numbers.length;

    return { numbers, mean, mad, deviations };
  }, [rawText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Input Dataset (values separated by commas/spaces)</label>
          <textarea 
            rows={4} value={rawText} 
            onChange={e => setRawText(e.target.value)}
            placeholder="e.g. 5, 8, 12, 16, 20..."
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#a78bfa] font-mono outline-none"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <span className="text-xs text-slate-400 block mb-1">Dataset Mean</span>
            <span className="text-2xl font-extrabold text-[#fbbf24]">{stats.mean.toFixed(2)}</span>
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-1">Variance MAD</span>
            <span className="text-2xl font-extrabold text-[#6ee7b7]">{stats.mad.toFixed(3)}</span>
          </div>
        </div>

        <div className="border-t border-[#2a273a] pt-3 mt-4">
          <span className="block text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-wider">Absolute difference listing</span>
          <div className="max-h-[140px] overflow-y-auto bg-[#1e1c2e] dev-coords rounded-lg p-2 border border-[#26233a] font-mono text-[11px] space-y-1">
            {stats.deviations.map((d, idx) => (
              <div key={idx} className="flex justify-between text-slate-300 px-1 border-b border-[#2d2940]/40 py-0.5">
                <span>Value: {d.val}</span>
                <span className="text-[#a78bfa]">|{d.val} - {stats.mean.toFixed(1)}| = {d.absDiff.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 12. AP CALC BC SCORE CALCULATOR COMPONENT
// ============================================
function APCalcBCScoreCalc() {
  const [mcCorrect, setMcCorrect] = useState(35);
  const [frqPoints, setFrqPoints] = useState(38); // out of 54

  const results = useMemo(() => {
    const rawMC = mcCorrect;
    const rawFRQ = frqPoints;

    // College Board exact weight multiplier
    const mcWeighted = rawMC * 1.2;
    const frqWeighted = rawFRQ * 1.0;
    const compositeScore = Math.min(108, mcWeighted + frqWeighted);

    let bcGrade = 1;
    if (compositeScore >= 66) bcGrade = 5;
    else if (compositeScore >= 52) bcGrade = 4;
    else if (compositeScore >= 40) bcGrade = 3;
    else if (compositeScore >= 32) bcGrade = 2;

    // Subscore estimation
    let abSubscoreVal = bcGrade;
    if (compositeScore >= 58 && bcGrade < 5) abSubscoreVal = bcGrade + 1;

    return { compositeScore, bcGrade, abSubscoreVal };
  }, [mcCorrect, frqPoints]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Multiple Choice Correct (out of 45)</label>
          <input 
            type="range" min="0" max="45" value={mcCorrect} 
            onChange={e => setMcCorrect(parseInt(e.target.value) || 0)}
            className="w-full accent-[#6ee7b7]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 Correct</span>
            <span className="text-[#6ee7b7] text-sm">{mcCorrect} / 45 Correct</span>
            <span>45 Correct</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">FRQ Score Total (Q1-6, sum of 54 max)</label>
          <input 
            type="range" min="0" max="54" value={frqPoints} 
            onChange={e => setFrqPoints(parseInt(e.target.value) || 0)}
            className="w-full accent-[#a78bfa]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 pt</span>
            <span className="text-[#a78bfa] text-sm">{frqPoints} / 54 FRQ points</span>
            <span>54 pt</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] rounded-2xl p-5 flex flex-col justify-between text-center items-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center p-3 bg-[#1e1c2e] border border-[#2a273a] rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">BC Score</span>
            <div className="text-4xl font-extrabold text-[#6ee7b7]">{results.bcGrade}</div>
          </div>
          <div className="flex flex-col items-center p-3 bg-[#1e1c2e] border border-[#2a273a] rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">AB Subscore</span>
            <div className="text-4xl font-extrabold text-[#a78bfa]">{results.abSubscoreVal}</div>
          </div>
        </div>

        <div className="w-full mt-6 space-y-2 border-t border-[#2a273a] pt-4 text-xs text-slate-400 text-left">
          <div className="flex justify-between">
            <span>MC Composite weight (x1.2):</span>
            <span className="text-white font-medium">{(mcCorrect * 1.2).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span>Overall scaled points:</span>
            <span className="text-[#fbbf24] font-medium">{results.compositeScore.toFixed(1)} / 108</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 13. ILLINOIS CHILD SUPPORT CALCULATOR COMPONENT
// ============================================
function IllinoisChildSupportCalc() {
  const [incomeA, setIncomeA] = useState(65000); // Parent A
  const [incomeB, setIncomeB] = useState(40000); // Parent B
  const [children, setChildren] = useState(2);
  const [carePlan, setCarePlan] = useState('standard'); // standard, shared

  const results = useMemo(() => {
    // Estimating statutory nets
    const monthlyNetA = Math.max(0, incomeA / 12 * 0.76); 
    const monthlyNetB = Math.max(0, incomeB / 12 * 0.81); 
    const combinedNet = monthlyNetA + monthlyNetB;

    // Approximate basic obligation model representing Illinois standard curved lines
    const baseObligationPercent = 0.16 + (children * 0.07);
    let baseObligation = combinedNet * baseObligationPercent;

    if (carePlan === 'shared') {
      baseObligation = baseObligation * 1.5; // Multiplier index standard shared physical formula
    }

    const sharePercentA = combinedNet > 0 ? (monthlyNetA / combinedNet) : 0;
    const rawSupportDue = baseObligation * sharePercentA;

    return {
      monthlyNetA,
      monthlyNetB,
      combinedNet,
      baseObligation,
      sharePercentA,
      estimatedDue: rawSupportDue
    };
  }, [incomeA, incomeB, children, carePlan]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Parent A annual Income</label>
            <input 
              type="number" value={incomeA} 
              onChange={e => setIncomeA(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Parent B annual Income</label>
            <input 
              type="number" value={incomeB} 
              onChange={e => setIncomeB(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Minor Children</label>
            <select 
              value={children} 
              onChange={e => setChildren(parseInt(e.target.value) || 1)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n} Children</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Parent Time Plan</label>
            <select 
              value={carePlan} 
              onChange={e => setCarePlan(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-xs text-white"
            >
              <option value="standard">Standard Custody (&lt; 146 nights)</option>
              <option value="shared">Shared Physical Care (&ge; 146 nights)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Parent A Estimated support</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">
            ${results.estimatedDue.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-sm font-semibold">/mo</span>
          </span>
          <span className="block text-[10px] text-slate-500 mt-1">Illinois Income Shares Guidelines Model</span>
        </div>

        <div className="border-t border-[#2a273a] pt-4 mt-4 text-xs text-slate-400 space-y-2 text-left">
          <div className="flex justify-between">
            <span>Parent A Estimated Net Mo:</span>
            <span className="text-white font-medium">${results.monthlyNetA.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between">
            <span>Joint Family Base:</span>
            <span className="text-white font-medium">${results.baseObligation.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-[#a78bfa]">
            <span>Income Split % Parent A:</span>
            <span>{(results.sharePercentA * 100).toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 14. ARMY HEIGHT AND WEIGHT CALCULATOR COMPONENT
// ============================================
function ArmyHeightAndWeightCalc() {
  const [gender, setGender] = useState('male');
  const [ageGroup, setAgeGroup] = useState('21'); // 17, 21, 28, 40
  const [height, setHeight] = useState(70); // inches
  const [weight, setWeight] = useState(190); // lbs
  
  // Tape parameters if needed
  const [neck, setNeck] = useState(15.5);
  const [waist, setWaist] = useState(35.5);
  const [hips, setHips] = useState(38); // female

  const results = useMemo(() => {
    // Screening Limits
    // Typical US Army screening maximum weight for 70 inches height: Male 21-27 is 180 lbs.
    const maxScreeningWeight = gender === 'male' ? (height * 3.5 + 10) : (height * 3.1 + 8);
    const exceedsScreening = weight > maxScreeningWeight;

    // Army Fat Circumference Formulas
    let estBodyFat = 0;
    if (gender === 'male') {
      const diff = waist - neck;
      if (diff > 0) {
        estBodyFat = 86.01 * Math.log10(diff) - 70.041 * Math.log10(height) + 36.76;
      }
    } else {
      const parentheticalSum = waist + hips - neck;
      if (parentheticalSum > 0) {
        estBodyFat = 161.278 * Math.log10(parentheticalSum) - 100.693 * Math.log10(height) - 19.654;
      }
    }
    
    estBodyFat = Math.max(2, Math.min(60, estBodyFat));

    // Limit determination based on regulation
    let bfLimit = 22;
    if (gender === 'male') {
      if (ageGroup === '17') bfLimit = 20;
      else if (ageGroup === '21') bfLimit = 22;
      else if (ageGroup === '28') bfLimit = 24;
      else bfLimit = 26;
    } else {
      if (ageGroup === '17') bfLimit = 30;
      else if (ageGroup === '21') bfLimit = 32;
      else if (ageGroup === '28') bfLimit = 34;
      else bfLimit = 36;
    }

    const compliant = exceedsScreening ? (estBodyFat <= bfLimit) : true;

    return { maxScreeningWeight, exceedsScreening, estBodyFat, bfLimit, compliant };
  }, [gender, ageGroup, height, weight, neck, waist, hips]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Gender</label>
            <select 
              value={gender} onChange={e => setGender(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white"
            >
              <option value="male">Male Soldier</option>
              <option value="female">Female Soldier</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Age Category</label>
            <select 
              value={ageGroup} onChange={e => setAgeGroup(e.target.value)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-xs text-white"
            >
              <option value="17">Age 17 - 20</option>
              <option value="21">Age 21 - 27</option>
              <option value="28">Age 28 - 39</option>
              <option value="40">Age 40 & over</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Height (inches)</label>
            <input 
              type="number" value={height} onChange={e => setHeight(Math.max(30, parseInt(e.target.value) || 30))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Current Weight (lbs)</label>
            <input 
              type="number" value={weight} onChange={e => setWeight(Math.max(10, parseInt(e.target.value) || 10))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        {results.exceedsScreening && (
          <div className="bg-[#1b192c] border border-[#3e346b] p-4 rounded-xl space-y-3">
            <span className="block text-[11px] font-bold text-[#a78bfa] uppercase">Regulatory Tape Test Required (Exceeds Screen)</span>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[10px] text-slate-400 mb-1 uppercase">Neck (in)</label>
                <input 
                  type="number" step="0.1" value={neck} onChange={e => setNeck(parseFloat(e.target.value) || 12)}
                  className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[10px] text-slate-400 mb-1 uppercase font-mono">Waist (in)</label>
                <input 
                  type="number" step="0.1" value={waist} onChange={e => setWaist(parseFloat(e.target.value) || 28)}
                  className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1 text-xs text-white"
                />
              </div>
              {gender === 'female' && (
                <div>
                  <label className="block text-[10px] text-slate-400 mb-1 uppercase font-mono">Hips (in)</label>
                  <input 
                    type="number" step="0.1" value={hips} onChange={e => setHips(parseFloat(e.target.value) || 30)}
                    className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-2 py-1 text-xs text-white"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center">
        <div>
          <span className="text-xs text-slate-400 block mb-1 font-bold">Military Standard status</span>
          <div className={`text-2xl font-black py-2 rounded-xl mb-3 ${results.compliant ? 'bg-[#0f2e22] text-[#6ee7b7]' : 'bg-[#2d1212] text-red-400'}`}>
            {results.compliant ? 'COMPLIANT' : 'NON-COMPLIANT'}
          </div>
        </div>

        <div className="space-y-2 border-t border-[#2a273a] pt-4 text-xs text-slate-400 text-left">
          <div className="flex justify-between">
            <span>Allowed Max Screen weight:</span>
            <span className="text-white">{results.maxScreeningWeight.toFixed(0)} lbs</span>
          </div>
          {results.exceedsScreening ? (
            <>
              <div className="flex justify-between">
                <span>Calculated Body Fat %:</span>
                <span className="text-white font-bold">{results.estBodyFat.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Regulation Limit %:</span>
                <span className="text-[#fbbf24]">{results.bfLimit}%</span>
              </div>
            </>
          ) : (
            <div className="text-center text-[#6ee7b7] py-2 text-[11px] bg-emerald-950/20 rounded-lg">
              Passes standard weight screen automatically!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================
// 15. AP CALC AB SCORE CALCULATOR COMPONENT
// ============================================
function APCalcABScoreCalc() {
  const [mcCorrect, setMcCorrect] = useState(32);
  const [frqPoints, setFrqPoints] = useState(30);

  const results = useMemo(() => {
    const rawMC = mcCorrect;
    const rawFRQ = frqPoints;

    const mcWeighted = rawMC * 1.2;
    const frqWeighted = rawFRQ * 1.0;
    const compositeScore = Math.min(108, mcWeighted + frqWeighted);

    let apGrade = 1;
    if (compositeScore >= 62) apGrade = 5;
    else if (compositeScore >= 49) apGrade = 4;
    else if (compositeScore >= 38) apGrade = 3;
    else if (compositeScore >= 28) apGrade = 2;

    return { compositeScore, apGrade };
  }, [mcCorrect, frqPoints]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Multiple Choice correct (out of 45)</label>
          <input 
            type="range" min="0" max="45" value={mcCorrect} 
            onChange={e => setMcCorrect(parseInt(e.target.value) || 0)}
            className="w-full accent-[#6ee7b7]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 pt</span>
            <span className="text-[#6ee7b7] text-sm">{mcCorrect} / 45 correct</span>
            <span>45 pt</span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">FRQ Score Total (Q1-6, sum of 54 max)</label>
          <input 
            type="range" min="0" max="54" value={frqPoints} 
            onChange={e => setFrqPoints(parseInt(e.target.value) || 0)}
            className="w-full accent-[#a78bfa]"
          />
          <div className="flex justify-between text-xs text-slate-500 font-semibold mt-1">
            <span>0 pt</span>
            <span className="text-[#a78bfa] text-sm">{frqPoints} / 54 FRQ points</span>
            <span>54 pt</span>
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-6 rounded-2xl flex flex-col justify-between text-center items-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-2 font-bold">Predicted AP Grade</span>
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1b172a] to-[#253f36] border-2 border-[#6ee7b7] flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-[#6ee7b7]/10">
            {results.apGrade}
          </div>
        </div>

        <div className="w-full mt-6 space-y-2 border-t border-[#2a273a] pt-4 text-xs text-slate-400 text-left">
          <div className="flex justify-between">
            <span>MC Score Weighted (x1.2):</span>
            <span className="text-white font-medium">{(mcCorrect * 1.2).toFixed(1)}</span>
          </div>
          <div className="flex justify-between">
            <span>Scaled composite total:</span>
            <span className="text-[#fbbf24] font-medium">{results.compositeScore.toFixed(1)} / 108</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 16. INDIANA CHILD SUPPORT CALCULATOR COMPONENT
// ============================================
function IndianaChildSupportCalc() {
  const [weeklyGrossA, setWeeklyGrossA] = useState(1200); // Parent A
  const [weeklyGrossB, setWeeklyGrossB] = useState(800); // Parent B
  const [children, setChildren] = useState(2);
  const [overnights, setOvernights] = useState(80); // 0-182

  const results = useMemo(() => {
    const combinedGross = weeklyGrossA + weeklyGrossB;
    
    // Indiana standard base mapping approximation (approx. 13% for first child, declining ratios)
    const baseObligationPercent = 0.11 + (children * 0.04);
    const baseWeeklyObligation = combinedGross * baseObligationPercent;

    const proportionA = combinedGross > 0 ? (weeklyGrossA / combinedGross) : 0;
    const baseShareA = baseWeeklyObligation * proportionA;

    // Overnight credit estimate per Indiana Guideline standards
    const creditFactor = Math.min(182, overnights) / 365 * 0.70;
    const overnightCredit = baseWeeklyObligation * creditFactor;

    const finalWeeklyDue = Math.max(0, baseShareA - overnightCredit);

    return {
      combinedGross,
      baseWeeklyObligation,
      proportionA,
      baseShareA,
      overnightCredit,
      estimatedWeeklyDue: finalWeeklyDue
    };
  }, [weeklyGrossA, weeklyGrossB, children, overnights]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-7 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Parent A weekly Income</label>
            <input 
              type="number" value={weeklyGrossA} 
              onChange={e => setWeeklyGrossA(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Parent B weekly Income</label>
            <input 
              type="number" value={weeklyGrossB} 
              onChange={e => setWeeklyGrossB(Math.max(0, parseFloat(e.target.value) || 0))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono font-bold">Children Count</label>
            <select 
              value={children} onChange={e => setChildren(parseInt(e.target.value) || 1)}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n} Children</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono font-bold">Parent A Overnights</label>
            <input 
              type="number" min="0" max="365" value={overnights} 
              onChange={e => setOvernights(Math.max(0, Math.min(365, parseInt(e.target.value) || 0)))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">Parent A Estimated weekly due</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7]">
            ${results.estimatedWeeklyDue.toLocaleString(undefined, { maximumFractionDigits: 0 })} <span className="text-sm font-semibold">/wk</span>
          </span>
          <span className="block text-[11px] text-slate-500 mt-2">Indiana Weekly Child Support Guidelines</span>
        </div>

        <div className="border-t border-[#2a273a] pt-4 mt-4 text-xs text-slate-400 text-left space-y-2">
          <div className="flex justify-between">
            <span>Proportional Share Raw:</span>
            <span className="text-white font-medium">${results.baseShareA.toLocaleString(undefined, { maximumFractionDigits: 0 })}/wk</span>
          </div>
          <div className="flex justify-between">
            <span>Overnight Credit Deduction:</span>
            <span className="text-white font-medium">-${results.overnightCredit.toLocaleString(undefined, { maximumFractionDigits: 0 })}/wk</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 17. VOLUME OF A SPHERE CALCULATOR COMPONENT
// ============================================
function VolumeOfSphereCalc() {
  const [val, setVal] = useState(5);
  const [inputType, setInputType] = useState('radius'); // radius, diameter, circumference

  const results = useMemo(() => {
    let r = val;
    if (inputType === 'diameter') r = val / 2;
    else if (inputType === 'circumference') r = val / (2 * Math.PI);

    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    const surfaceArea = 4 * Math.PI * Math.pow(r, 2);

    return { r, volume, surfaceArea };
  }, [val, inputType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Input Dimension type</label>
          <select 
            value={inputType} onChange={e => setInputType(e.target.value)}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2.5 text-sm text-white"
          >
            <option value="radius">Sphere Radius (r)</option>
            <option value="diameter">Sphere Diameter (d)</option>
            <option value="circumference">Sphere Circumference (C)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Measurement Value</label>
          <input 
            type="number" min="0.1" step="0.1" value={val} 
            onChange={e => setVal(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
            className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-4 py-2 text-base font-bold text-white focus:border-[#6ee7b7] outline-none"
          />
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 bg-[#171523] border border-[#26233a] p-5 rounded-xl space-y-4">
        <div>
          <span className="text-xs text-slate-400 block mb-0.5 font-bold">Sphere Volume</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7] block tracking-tight">
            {results.volume.toFixed(3)} <span className="text-sm font-normal text-slate-400">cubic units</span>
          </span>
        </div>
        <div>
          <span className="text-xs text-slate-400 block mb-0.5 font-bold">Total Surface Area</span>
          <span className="text-2xl font-extrabold text-[#a78bfa] block tracking-tight">
            {results.surfaceArea.toFixed(3)} <span className="text-sm font-normal text-slate-400">square units</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// 18. GPA CALCULATOR NO CREDITS COMPONENT
// ============================================
function GPACalculatorNoCreditsCalc() {
  const [grades, setGrades] = useState(['A', 'B', 'A', 'C', 'A']);

  const addGrade = () => {
    setGrades([...grades, 'A']);
  };

  const removeGrade = (index: number) => {
    setGrades(grades.filter((_, idx) => idx !== index));
  };

  const updateGrade = (index: number, val: string) => {
    setGrades(grades.map((g, idx) => idx === index ? val : g));
  };

  const currentGPA = useMemo(() => {
    if (grades.length === 0) return 0;
    const gradePoints: Record<string, number> = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0 };
    const totalPoints = grades.reduce((sum, g) => sum + (gradePoints[g] || 0), 0);
    return totalPoints / grades.length;
  }, [grades]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1a1827] rounded-xl p-4 border border-[#2d2a44] text-center flex flex-col justify-center">
          <span className="block text-xs text-slate-400 mb-1">Simple unweighted GPA</span>
          <span className="text-4xl font-black text-[#6ee7b7]">{currentGPA.toFixed(2)}</span>
        </div>
        <div className="bg-[#1a1827] rounded-xl p-4 border border-[#2d2a44] text-center flex flex-col justify-center">
          <span className="block text-xs text-slate-400 mb-1">Class Count</span>
          <span className="text-4xl font-black text-[#fbbf24]">{grades.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {grades.map((g, idx) => (
          <div key={idx} className="bg-[#171523] border border-[#26233a] p-3 rounded-xl flex items-center justify-between gap-1.5">
            <span className="text-xs text-slate-500 font-bold">Class {idx+1}</span>
            <select 
              value={g} 
              onChange={e => updateGrade(idx, e.target.value)}
              className="bg-[#1e1c2e] border border-[#2a273c] rounded-lg px-1 py-1 text-sm text-white focus:border-[#6ee7b7] outline-none"
            >
              {['A', 'B', 'C', 'D', 'F'].map(letter => (
                <option key={letter} value={letter}>{letter}</option>
              ))}
            </select>
            <button 
              onClick={() => removeGrade(idx)}
              className="text-red-400 hover:text-red-300 p-1 bg-red-950/20 hover:bg-red-950/40 rounded transition cursor-pointer"
            >
              <Trash className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}

        <button 
          onClick={addGrade}
          className="flex items-center justify-center gap-1.5 p-3 border border-dashed border-[#22c55e]/20 hover:border-[#22c55e]/50 hover:bg-[#22c55e]/5 text-[#6ee7b7] font-semibold text-sm rounded-xl cursor-pointer transition"
        >
          <Plus className="w-4 h-4" /> Add Class
        </button>
      </div>
    </div>
  );
}

// ============================================
// 19. POWER TO WEIGHT RATIO CALCULATOR COMPONENT
// ============================================
function PowerToWeightRatioCalc() {
  const [power, setPower] = useState(300); // Horsepower or Watts
  const [weight, setWeight] = useState(3200); // lbs or kg
  const [unitType, setUnitType] = useState('vehicle'); // vehicle, cyclist

  const ratio = useMemo(() => {
    let rawRatio = 0;
    let desc = 'Standard performance model';

    if (unitType === 'vehicle') {
      rawRatio = power / weight; // hp/lbs
      const hpPerTon = rawRatio * 2000;
      if (hpPerTon < 100) desc = 'Budget Commuter';
      else if (hpPerTon < 180) desc = 'Sporty Hatchback';
      else if (hpPerTon < 300) desc = 'Compact Sports Car';
      else if (hpPerTon < 500) desc = 'High-End Supercar';
      else desc = 'Formula 1 / Hypercar Tier';

      return { rawRatio, hpPerTon, desc, phrase: `${rawRatio.toFixed(3)} hp/lb (${hpPerTon.toFixed(1)} hp/ton)` };
    } else {
      // cyclist watts/kg
      rawRatio = power / weight; // W/kg
      if (rawRatio < 2.0) desc = 'Untrained / Recreational Cyclist';
      else if (rawRatio < 3.2) desc = 'Healthy Enthusiast';
      else if (rawRatio < 4.5) desc = 'Cat 2/3 Competitive Racer';
      else desc = 'World-Tour Professional climber';

      return { rawRatio, hpPerTon: 0, desc, phrase: `${rawRatio.toFixed(2)} W/kg` };
    }
  }, [power, weight, unitType]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="col-span-1 md:col-span-6 space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase font-mono">Category Profile</label>
          <div className="flex bg-[#1e1c2e] p-1 border border-[#2a273c] rounded-xl">
            <button 
              onClick={() => { setUnitType('vehicle'); setPower(300); setWeight(3200); }}
              className={`flex-1 py-1.5 text-xs rounded-lg font-bold cursor-pointer transition ${unitType === 'vehicle' ? 'bg-[#6ee7b7] text-[#0a0a0f]' : 'text-slate-400 hover:text-white'}`}
            >
              Vehicle (Cars/Bikes)
            </button>
            <button 
              onClick={() => { setUnitType('cyclist'); setPower(250); setWeight(75); }}
              className={`flex-1 py-1.5 text-xs rounded-lg font-bold cursor-pointer transition ${unitType === 'cyclist' ? 'bg-[#6ee7b7] text-[#0a0a0f]' : 'text-slate-400 hover:text-white'}`}
            >
              Athlete (Cycling/Gym)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">
              {unitType === 'vehicle' ? 'Power (Horsepower)' : 'Power (Watts)'}
            </label>
            <input 
              type="number" value={power} onChange={e => setPower(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">
              {unitType === 'vehicle' ? 'Weight (Pounds)' : 'Weight (Kilograms)'}
            </label>
            <input 
              type="number" value={weight} onChange={e => setWeight(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-[#1e1c2e] border border-[#2a273c] rounded-xl px-3 py-2 text-sm text-white focus:border-[#6ee7b7] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="col-span-1 md:col-span-6 bg-[#171523] border border-[#26233a] p-5 rounded-xl flex flex-col justify-between text-center items-center">
        <div>
          <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1 font-bold">Power-to-Weight Ratio</span>
          <span className="text-3xl font-extrabold text-[#6ee7b7] tracking-tight block">
            {ratio.phrase}
          </span>
        </div>

        <div className="mt-4 p-3 bg-[#1e1c2e] border border-[#2a273a] rounded-xl w-full">
          <span className="block text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Performance Classification</span>
          <span className="text-sm font-semibold text-[#fbbf24]">{ratio.desc}</span>
        </div>
      </div>
    </div>
  );
}
