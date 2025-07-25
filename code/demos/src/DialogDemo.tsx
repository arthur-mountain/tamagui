import { ChevronDown, X } from '@tamagui/lucide-icons'
import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Select,
  Sheet,
  TooltipSimple,
  Unspaced,
  View,
  XStack,
} from 'tamagui'
import { SelectDemoItem } from './SelectDemo'

export function DialogDemo() {
  return (
    <View gap="$4" justifyContent="center" alignItems="center">
      <DialogInstance />
      <DialogInstance disableAdapt />
    </View>
  )
}

function DialogInstance({ disableAdapt }: { disableAdapt?: boolean }) {
  return (
    <Dialog modal>
      <Dialog.Trigger asChild>
        <Button>
          <Button.Text>Show Dialog{disableAdapt ? ` (No Sheet)` : ''}</Button.Text>
        </Button>
      </Dialog.Trigger>

      {!disableAdapt && (
        <Adapt when="maxMd" platform="touch">
          <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4" gap="$4">
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay
              backgroundColor="$shadow6"
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
          </Sheet>
        </Adapt>
      )}

      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          backgroundColor="$shadow6"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quicker',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <Dialog.FocusScope focusOnIdle>
          <Dialog.Content
            bordered
            paddingVertical="$4"
            paddingHorizontal="$6"
            elevate
            borderRadius="$6"
            key="content"
            animateOnly={['transform', 'opacity']}
            animation={[
              'quicker',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: 20, opacity: 0 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            gap="$4"
          >
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>

            <Fieldset gap="$4" horizontal>
              <Label width={64} htmlFor="name">
                Name
              </Label>
              <Input flex={1} id="name" defaultValue="Nate Wienert" />
            </Fieldset>

            <Fieldset gap="$4" horizontal>
              <Label width={64} htmlFor="username">
                <TooltipSimple label="Pick your favorite" placement="bottom-start">
                  <Paragraph>Food</Paragraph>
                </TooltipSimple>
              </Label>
              <XStack flex={1}>
                <SelectDemoItem
                  trigger={
                    <Select.Trigger flex={1} iconAfter={ChevronDown}>
                      <Select.Value placeholder="Something" />
                    </Select.Trigger>
                  }
                />
              </XStack>
            </Fieldset>

            <XStack alignSelf="flex-end" gap="$4">
              <DialogInstance />

              <Dialog.Close displayWhenAdapted asChild>
                <Button theme="accent" aria-label="Close">
                  Save changes
                </Button>
              </Dialog.Close>
            </XStack>

            <Unspaced>
              <Dialog.Close asChild>
                <Button position="absolute" right="$3" size="$2" circular icon={X} />
              </Dialog.Close>
            </Unspaced>
          </Dialog.Content>
        </Dialog.FocusScope>
      </Dialog.Portal>
    </Dialog>
  )
}
