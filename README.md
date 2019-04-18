# csgo-nadeguide
Comprehensive list of Grenade Spots for CS:GO

How to install:
- create a new folder anywhere on your system
- download everything and save it to that folder

How to open:
- double click "csgo-nadeguide.html" to open in your default webbrowser
- copy the path (in the url box of your browser)
- openup a webbrowser window in your steam overlay
- paste link and hit enter :)

How to modify:
  You can add/modify grenades/maps by writing into the "./data.js" file.
  It needs to create a associative array "_maps" with the keys being the mapnames and the values being the mapdata
  
  mapdata needs to consitst of an associative array containing:
    - name: a display name for the map (optional)
            if not specified it will display the 'raw' map name, e.g. "de_dust2" instead of "Dust 2"
    - has_lower_map: [true/false] (optional) enables the lower/upper buttons on the website
    - pos_x, pos_y, scale, rotate, zoom: [numerical]
        Have a loot at
        "SteamLibrary\steamapps\common\Counter-Strike Global Offensive\csgo\resource\overviews".
        e.g. "de_dust2.txt" - copy those values.
        If you want to use a custom radar, create one with this guide:
        https://developer.valvesoftware.com/wiki/Creating_a_working_mini-map
        and paste the right values in there.
    - CTSpawn_x, CTSpawn_y, TSpawn_x, TSpawn_y, bombA_x, bombA_y, bombB_x, bombB_y: [numerical]
            These are optional and represent the percentage of the radar widht/height at which these icons should be placed
    - grenades: list of grenades
  
  grenade needs to be an associative array and consist of:
    - name: the name of the grenade destination, e.g. "mid_xbox"
    - x, y: [numerical] the ingame coordinates of the destination
    - utility, difficulty:  [numerical] a value from 1-5 (optional).
    - comment:              any useful information like advantages or disadvantages for this grenade,
                            e.g. "pop-flash - hard to avoid" or "watchout, you are very vulnerable to XY"
    - srcs: a list of sources / spots the grenade can be thrown from. e.g. the xbox smoke can be thrown
            form T Spawn, Upper Mid and Lower Tunnels.
            
  source needs to be an associative array containing:
  - name:     the name of the source / spot the grenade is thrown from, e.g. "t_spawn"
  - type:     one of ["smoke", "flash", "molotov", "he"] specifiying which icon to draw
  - angle:    [numerical] the 2D angle from topdown view
  - h_angle:  the vertical angle (optional and irrelevant for display purposes but it helps recreating throws in bot games)
  - comment:  any instruction on how to throw the grenade, e.g. "Medium Jump Throw" or "Walking Throw" (optional)
  
  !!!For every new grenade you need to add picures to the correct foldert for them to appear!!! (see Managing Resources)
  
  Managing Resources:
  You can exchange all images in "./icons". All icons must be in .png format.
  The image will automatically be scaled so that 1 pixel = 1 ingame unit.
  
  All radar pictures must be loacated in "./maps" with the following name:
      raw_map_name + "_radar.png"
      e.g.: "de_dust2_radar.png"
      If "has_lower_map" mapattribute set to true it will expect another radar picure with the name:
        raw_map_name + "_lower_radar.png"
     
  For a specific grenade to have throw instruction pictures, it will search for pictures in:
    "./maps/" + raw_map_name + "/" + grenade_type + "_to_" + grenade_name + "_from_" + source_name
    as:
      1.jpg, 2.jpg, 3.jpg, ... (it will stop searching after the first time it failed to find a picture)
      
    E.g. "./maps/de_dust2/smoke_to_mid_xbox_from_t_spawn/1.jpg", "./maps/de_dust2/smoke_to_mid_xbox_from_t_spawn/2.jpg"
    
    Note: In this example "./maps/de_dust2/smoke_to_mid_xbox_from_t_spawn/4.jpg" would not be shown
          as "3.png" could not be found.
          
          
        
        
        
  
