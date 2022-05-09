import { Trash, Camera } from "phosphor-react-native";
import {
    View,
    TouchableOpacity,
    Image
} from "react-native";
import { theme } from "../../theme";

import { styles } from "./styles";

interface Props {
    screenshot: string | null;
    onScreenshot: () => void;
    onRemoveScreenshot: () => void;
}

export function ScreenshotButton({
    screenshot,
    onRemoveScreenshot,
    onScreenshot
}: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={
                screenshot ? 
                onRemoveScreenshot :
                onScreenshot
            }
        >
            {
                screenshot ?
                <View>
                    <Image 
                        source={{ uri: screenshot }}
                        style={styles.image}
                    />
                    <Trash
                    size={22}
                    color={theme.colors.text_secondary}
                    weight="fill"
                    style={styles.removeIcon}
                />
                </View>
                :
                <Camera 
                    size={24}
                    color={theme.colors.text_primary}
                    weight="bold"
                />
            }
        </TouchableOpacity>
    )
}