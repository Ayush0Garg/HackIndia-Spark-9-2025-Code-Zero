package com.wasteManagement.wastify.Service;

import com.wasteManagement.wastify.Repository.AssignedJobRepo;
import com.wasteManagement.wastify.Model.MapData;
import com.wasteManagement.wastify.Model.AssignedJob;
import com.wasteManagement.wastify.Model.WasteReport;
import com.wasteManagement.wastify.Repository.WasteReportRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class dataService {

    @Autowired
    private WasteReportRepo wasteReportRepo;
    @Autowired
    private AssignedJobRepo assignedJobRepo;

    public List<WasteReport> getAllReports() {
        return wasteReportRepo.getReports();
    }

    public List<AssignedJob> getAllJobs() {
        return assignedJobRepo.findAll();
    }

    public HashMap<String, Long> getStats() {
        HashMap<String, Long> stats = new HashMap<>();
        stats.put("Total Requests", wasteReportRepo.getReportsCount());
        stats.put("Total Assigned Jobs", assignedJobRepo.count());
        stats.put("Total Cleaned Volume", 1000L);
        stats.put("Total Users", 20L);
        stats.put("Total Employees", 10L);
        return stats;
    }

    public List<MapData> getMapData() {
        List<MapData> mapData = new ArrayList<>();
        mapData = wasteReportRepo.findMapData();
        return  mapData;
    }


    public List<AssignedJob> getjobs() {
        List<AssignedJob> list = new ArrayList<>();
        list = assignedJobRepo.findAll();
        return  list;
    }
}
