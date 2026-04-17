import React from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { rainfallExperiments } from "@/data/projects";

export const Experiments: React.FC = () => {
  return (
    <Section
      id="experiments"
      eyebrow="EXPERIMENTS"
      title="Model Experiments & Training Metrics"
      subtitle="Snapshots of model comparison and evaluation metrics from key experiments."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Card className="p-5 text-xs">
          <h3 className="text-sm font-semibold text-slate-50">
            Rainfall Forecasting – Model Comparison
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            Comparing ARIMA and LSTM variants on multivariate meteorological time-series.
          </p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-700/80">
            <table className="w-full border-collapse text-[11px]">
              <thead className="bg-slate-900/90 text-slate-300">
                <tr>
                  <th className="px-3 py-2 text-left">Model</th>
                  <th className="px-3 py-2 text-right">RMSE</th>
                  <th className="px-3 py-2 text-right">MAE</th>
                </tr>
              </thead>
              <tbody className="bg-slate-950/90 text-slate-100">
                {rainfallExperiments.map((row) => (
                  <tr
                    key={row.model}
                    className="border-t border-slate-800/80"
                  >
                    <td className="px-3 py-2">{row.model}</td>
                    <td className="px-3 py-2 text-right">{row.rmse}</td>
                    <td className="px-3 py-2 text-right">{row.mae}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            LSTM variants reduce error vs ARIMA, validating the value of sequence modeling for short-term rainfall.
          </p>
        </Card>
        <Card className="p-5 text-xs">
          <h3 className="text-sm font-semibold text-slate-50">
            Experiment Logging & Hyperparameters
          </h3>
          <p className="mt-1 text-[11px] text-slate-400">
            Example hyperparameters tracked across key experiments.
          </p>
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-700/80">
            <table className="w-full border-collapse text-[11px]">
              <thead className="bg-slate-900/90 text-slate-300">
                <tr>
                  <th className="px-3 py-2 text-left">Experiment</th>
                  <th className="px-3 py-2 text-left">Hyperparameter</th>
                  <th className="px-3 py-2 text-right">Value</th>
                </tr>
              </thead>
              <tbody className="bg-slate-950/90 text-slate-100">
                <tr className="border-t border-slate-800/80">
                  <td className="px-3 py-2">Rainfall LSTM</td>
                  <td className="px-3 py-2">Sequence length</td>
                  <td className="px-3 py-2 text-right">24 hours</td>
                </tr>
                <tr className="border-t border-slate-800/80">
                  <td className="px-3 py-2">Rainfall LSTM</td>
                  <td className="px-3 py-2">Hidden units</td>
                  <td className="px-3 py-2 text-right">64</td>
                </tr>
                <tr className="border-t border-slate-800/80">
                  <td className="px-3 py-2">Rainfall LSTM</td>
                  <td className="px-3 py-2">Dropout</td>
                  <td className="px-3 py-2 text-right">0.3</td>
                </tr>
                <tr className="border-t border-slate-800/80">
                  <td className="px-3 py-2">Car Price Model</td>
                  <td className="px-3 py-2">Regularization</td>
                  <td className="px-3 py-2 text-right">L2 (alpha = 0.001)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Section>
  );
};

