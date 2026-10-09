import React from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  Clock,
  ArrowRight,
  ShieldAlert,
  RefreshCw,
} from 'lucide-react';
import { ChangeAlert } from '../types/tcas';
import { EnrichedAdmissionProject } from '../utils/tcasHelpers';

interface AlertsViewProps {
  alerts: ChangeAlert[];
  allProjects: EnrichedAdmissionProject[];
  onOpenDetail: (project: EnrichedAdmissionProject) => void;
  onSimulateChange: () => void;
}

export const AlertsView: React.FC<AlertsViewProps> = ({
  alerts,
  allProjects,
  onOpenDetail,
  onSimulateChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            ระบบตรวจจับการเปลี่ยนแปลงกำหนดการรับสมัคร
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            ระบบตรวจสอบอัตโนมัติ เปรียบเทียบข้อมูลเดิมกับประกาศฉบับแก้ไขของมหาวิทยาลัย
          </p>
        </div>

        <button
          onClick={onSimulateChange}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition-all shadow-xs cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" />
          <span>จำลองการตรวจพบการเลื่อนวัน</span>
        </button>
      </div>

      {/* Info explanation banner */}
      <div className="p-4 bg-amber-50/70 border border-amber-200/90 rounded-2xl space-y-1.5 text-xs text-amber-950">
        <div className="font-bold text-amber-900 flex items-center gap-1.5">
          <ShieldAlert className="h-4 w-4 text-amber-700" />
          <span>ทำไมระบบตรวจจับการเลื่อนกำหนดการจึงสำคัญสำหรับเด็ก TCAS?</span>
        </div>
        <p className="leading-relaxed text-amber-900/90">
          มหาวิทยาลัยในไทยมักออกประกาศขยายเวลารับสมัคร เลื่อนวันสอบสัมภาษณ์ หรือปรับจำนวนรับเพิ่มเติม หากนักเรียนติดตามไม่ทันอาจเสียโอกาสหรือวางแผนผิดพลาด ระบบนี้จึงคอยตรวจจับความแตกต่างระหว่างประกาศเดิมและประกาศใหม่ พร้อมแจ้งเตือนให้นักเรียนทราบทันที
        </p>
      </div>

      {/* List of Change Alerts in Thai */}
      <div className="space-y-4">
        {alerts.length === 0 ? (
          <div className="p-12 text-center bg-white border border-slate-200 rounded-2xl space-y-2">
            <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-800">ข้อมูลทุกสาขาตรงกับประกาศทางการล่าสุด</h3>
            <p className="text-xs text-slate-500">
              ไม่พบการแก้ไขกำหนดการหรือเกณฑ์คะแนนในการตรวจสอบรอบล่าสุด
            </p>
          </div>
        ) : (
          alerts.map((alert) => {
            const project = allProjects.find((p) => p.project.id === alert.projectId);

            return (
              <div
                key={alert.id}
                className="bg-white border-2 border-amber-200 rounded-2xl p-5 shadow-sm space-y-4"
              >
                {/* Header line */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-slate-900">{alert.universityAbbr}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-600 font-semibold">{alert.programName}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500">{alert.roundName}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                      <span>{alert.title}</span>
                    </h3>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 shrink-0 bg-slate-100 px-2.5 py-1 rounded-lg">
                    ตรวจพบเมื่อ: {alert.detectedAt}
                  </span>
                </div>

                {/* Diff Box: Previous vs New */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl text-xs">
                  <div className="space-y-1 p-2 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-400 block text-[11px] font-bold">กำหนดการเดิม:</span>
                    <span className="line-through font-mono text-rose-600 font-semibold text-sm">
                      {alert.previousValue}
                    </span>
                  </div>

                  <div className="space-y-1 p-2 bg-emerald-50 rounded-lg border border-emerald-200">
                    <span className="text-emerald-700 block text-[11px] font-bold">กำหนดการใหม่ตามประกาศล่าสุด:</span>
                    <span className="font-mono text-emerald-800 font-black text-sm">
                      {alert.newValue}
                    </span>
                  </div>
                </div>

                {/* Source and verification footer */}
                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="text-slate-600">
                    อ้างอิง: <span className="font-semibold text-slate-800">{alert.sourceName}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {project && (
                      <button
                        onClick={() => onOpenDetail(project)}
                        className="font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
                      >
                        ดูรายละเอียดสาขานี้ →
                      </button>
                    )}

                    <a
                      href={alert.sourceUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1"
                    >
                      <span>ประกาศทางการ</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
