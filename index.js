import Meister from '@meisterplayer/meisterplayer/index';
import BaseMedia from '@meisterplayer/plugin-basemedia/index';
import Html5Player from '@meisterplayer/plugin-html5player/index';
import StandardUi from '@meisterplayer/plugin-standardui/index';

Meister.builtIn = {
        [Html5Player.pluginName]: {},
        [BaseMedia.pluginName]: {},
        [StandardUi.pluginName]: {},
};

Meister.Configuration.overwrite(Meister.builtIn);

