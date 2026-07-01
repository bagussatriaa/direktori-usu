"use client";

import { useEffect, useMemo, useState } from "react";
import Dropdown from "@/components/Dropdown";
import type { CourseItem } from "@/types/directory.types";

interface DosenFiltersProps {
  courses: CourseItem[];
}

export default function DosenFilters({ courses }: DosenFiltersProps) {
  // Ambil unique tahun
  const years = useMemo(() => {
    return [...new Set(courses.map((course) => course.year))];
  }, [courses]);

  // Ambil unique semester berdasarkan selected year
  const [selectedYear, setSelectedYear] = useState(
    years[0] || ""
  );

  const semesters = useMemo(() => {
    return [
      ...new Set(
        courses
          .filter((course) => course.year === selectedYear)
          .map((course) => course.semester)
      ),
    ];
  }, [courses, selectedYear]);

  const [selectedSemester, setSelectedSemester] = useState(
    semesters[0] || ""
  );

  // Reset semester kalau tahun berubah dan semester invalid
  useEffect(() => {
    if (!semesters.includes(selectedSemester)) {
      setSelectedSemester(semesters[0] || "");
    }
  }, [selectedYear, semesters, selectedSemester]);

  // Filter final
  const filteredCourses = useMemo(() => {
    return courses.filter(
      (course) =>
        course.year === selectedYear &&
        course.semester === selectedSemester
    );
  }, [courses, selectedYear, selectedSemester]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Dropdown
        placeholder="Pilih Tahun"
        options={years}
        value={selectedYear}
        onSelect={setSelectedYear}
        className="w-full md:w-52"
        />

        <Dropdown
        placeholder="Pilih Semester"
        options={semesters}
        value={selectedSemester}
        onSelect={setSelectedSemester}
        className="w-full md:w-52"
        />
      </div>

      {/* Table */}
      {filteredCourses.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 text-left">
              <tr>
                <th className="p-4">Mata Kuliah</th>
                <th className="p-4">Kelas</th>
                <th className="p-4">Program Studi</th>
              </tr>
            </thead>

            <tbody>
              {filteredCourses.map((course, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200"
                >
                  <td className="p-4">{course.course_name}</td>
                  <td className="p-4">{course.class_name}</td>
                  <td className="p-4">{course.study_program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-zinc-100 rounded-xl p-4 text-sm text-zinc-500">
          Tidak ada mata kuliah untuk filter ini.
        </div>
      )}
    </div>
  );
}