$brainDir = "C:\Users\Rei\.gemini\antigravity-ide\brain\1df06fab-829e-4f70-b5f8-70e6e8122148"
$publicServices = "public/images/services"
$publicAbout = "public/images/about"

# Ensure dirs exist
New-Item -ItemType Directory -Force -Path $publicServices, $publicAbout

# 1. Copy Gemini-generated images from the previous session
Write-Host "Copying Gemini-generated images..."

# OOH Production
Copy-Item -Path "$brainDir\production_3_1781714477063.png" -Destination "$publicServices/production_3.png" -Force

# OOH Specialist
Copy-Item -Path "$brainDir\specialist_1_1781714510062.png" -Destination "$publicServices/specialist_1.png" -Force
Copy-Item -Path "$brainDir\specialist_2_1781714538475.png" -Destination "$publicServices/specialist_2.png" -Force
Copy-Item -Path "$brainDir\specialist_3_1781714581646.png" -Destination "$publicServices/specialist_3.png" -Force

# OOH Consultation
Copy-Item -Path "$brainDir\consultation_meeting_1781698413780.png" -Destination "$publicServices/consultation_1.png" -Force
Copy-Item -Path "$brainDir\consultation_2_1781714609803.png" -Destination "$publicServices/consultation_2.png" -Force
Copy-Item -Path "$brainDir\consultation_3_1781714653770.png" -Destination "$publicServices/consultation_3.png" -Force

# OOH Research
Copy-Item -Path "$brainDir\research_analytics_1781698432785.png" -Destination "$publicServices/research_1.png" -Force
Copy-Item -Path "$brainDir\research_2_1781714697313.png" -Destination "$publicServices/research_2.png" -Force
Copy-Item -Path "$brainDir\research_3_1781714753506.png" -Destination "$publicServices/research_3.png" -Force

# Why Us (About Page)
Copy-Item -Path "$brainDir\whyus_1_1781714827170.png" -Destination "$publicAbout/whyus_1.png" -Force
Copy-Item -Path "$brainDir\whyus_2_1781714888284.png" -Destination "$publicAbout/whyus_2.png" -Force
Copy-Item -Path "$brainDir\whyus_3_1781714936766.png" -Destination "$publicAbout/whyus_3.png" -Force
Copy-Item -Path "$brainDir\whyus_4_1781714975634.png" -Destination "$publicAbout/whyus_4.png" -Force
Copy-Item -Path "$brainDir\whyus_5_1781715037188.png" -Destination "$publicAbout/whyus_5.png" -Force

# 2. Download original layout assets from the remote server
Write-Host "Downloading original layout assets..."

$downloads = @{
    "https://pixelgroup.id/uploads/large_TMII_Gate_03_270924_00704_9c70b38b0e.jpg" = "$publicAbout/vision_tmii.jpg"
    "https://pixelgroup.id/uploads/large_CGK_3_Inter_Giant_LED_210125_00930_3a938a7030.jpg" = "$publicAbout/mission_1.jpg"
    "https://pixelgroup.id/uploads/large_Still_2024_11_13_100243_1_15_1_e50178550e.jpg" = "$publicAbout/mission_2.jpg"
    "https://pixelgroup.id/uploads/large_HSR_HLM_Boarding_Pillar_Warp_051224_7408_aa907be6c4.jpg" = "$publicAbout/mission_3.jpg"
    "https://pixelgroup.id/uploads/large_GBK_Runner_Asia_Afrika_100225_2272_51a2c90401.jpg" = "$publicAbout/mission_4.jpg"
    "https://pixelgroup.id/uploads/large_CGK_T3_Domestik_Security_Check_Border_091024_1769_34e08c6650.jpg" = "$publicServices/research.jpg"
    "https://pixelgroup.id/uploads/large_CGK_3_Inter_Departure_Pillar_201224_9337_3ce87f440f.jpg" = "$publicAbout/cgk_departure_pillar.jpg"
    "https://pixelgroup.id/uploads/large_Copy_of_Pixel_1087_SO_cb22894e56.jpg" = "$publicAbout/copy_pixel_1087.jpg"
}

foreach ($url in $downloads.Keys) {
    $dest = $downloads[$url]
    Write-Host "Downloading $url to $dest..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
    } catch {
        Write-Error "Failed to download $url : $_"
    }
}

Write-Host "Copy and download completed successfully."
